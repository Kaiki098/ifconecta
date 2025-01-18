"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Mail } from "lucide-react";
import {
  Button,
  Field,
  Fieldset,
  Form,
  Input,
  InputWrapper,
  Label,
} from "./styles";
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

      if (response.status === 401) {
        toast.error("Nome de usuário ou senha incorretos.");
        setError("username", {});
        setError("password", {});
        return;
      }

      const result = await response.json();

      if (result.success && result.jwt) {
        document.cookie = `auth=${result.jwt}; path=/;`;
        router.push("/projects");
      } else {
        throw new Error(result.messsage);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao conectar. Tente novamente mais tarde.");
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <Fieldset>
        <Field>
          <Label htmlFor="username">Usuário:</Label>
          <InputWrapper>
            <Mail />
            <Input
              type="text"
              {...register("username", { required: "Usuário é obrigatório" })}
              $error={!!errors.username}
            />
          </InputWrapper>
          {errors.username && <span>{errors.username.message}</span>}
        </Field>
        <Field>
          <Label htmlFor="password">Senha:</Label>
          <VisibilityInput
            {...register("password", { required: "Senha é obrigatória" })}
            $error={!!errors.password}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </Field>
      </Fieldset>
      <Button type="submit">Continuar</Button>
    </Form>
  );
};
