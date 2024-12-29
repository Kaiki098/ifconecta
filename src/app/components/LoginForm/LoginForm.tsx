"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button, Field, Fieldset, Input, Label } from "./styles";
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

  function handleLogin(data: InputData) {
    if (data.username == "admin" && data.password == "1234") {
      router.push("/projects");
    } else {
      setError("username", {});
      setError("password", {});
      toast.error("Nome de usuário ou senha incorretos.");
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
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
        <Button type="submit">Continuar</Button>
      </Fieldset>
    </form>
  );
};
