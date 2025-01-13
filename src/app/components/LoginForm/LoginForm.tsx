"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button, Field, Fieldset, Form, Input, Label } from "./styles";
import { VisibilityInput } from "../VisibilityInput/VisibilityInput";

interface InputData {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<InputData>();

  const router = useRouter();

  async function handleLogin(data: InputData) {
    try {
      const payload = {
        username: data.username.trim(),
        password: data.password.trim(),
      };

      const response = await fetch(
        process.env.IFCONECTA_API_URL + "/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();

      if (result.success && result.jwt) {
        document.cookie = `auth=${result.jwt}; path=/;`;
        router.push("/projects");
      } else {
        setError("username", {});
        setError("password", {});
        toast.error("Nome de usuário ou senha incorretos.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao conectar à API.");
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <Fieldset>
        <Field>
          <Label htmlFor="username">Usuário:</Label>
          <Input
            type="text"
            {...register("username")}
            $error={!!errors.username}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Senha</Label>
          <VisibilityInput
            {...register("password")}
            $error={!!errors.password}
          />
        </Field>
      </Fieldset>
      <Button type="submit">Continuar</Button>
    </Form>
  );
};
