"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import { HomeButton } from "../components/HomeButton/HomeButton";
import { useRouter } from "next/navigation";
import { VisibilityInput } from "../components/VisibilityInput/VisibilityInput";
import { Bounce, toast, ToastContainer } from "react-toastify";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Container,
  Field,
  Fieldset,
  Header,
  Input,
  Label,
  Nav,
  Page,
  Title1,
  Title2,
} from "./styles";

interface InputData {
  username: string;
  password: string;
}

export default function Login() {
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

  if (errors.password) console.log("Erro na password");

  return (
    <Page>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Header>
        <Nav>
          <Image
            src="/images/logo.svg"
            alt="Logo IFConecta, universidade e comunidade ligadas por uma linha tracejada que passa pela palavra 'IFConecta'"
            width={140}
            height={60}
            quality={100}
          />
          <HomeButton />
        </Nav>
      </Header>
      <Container>
        <Title1>IFConecta</Title1>
        <Title2>IFSULDEMINAS</Title2>
        <Card>
          <CardTitle>Login</CardTitle>
          <CardText>para professores</CardText>
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
        </Card>
      </Container>
    </Page>
  );
}
