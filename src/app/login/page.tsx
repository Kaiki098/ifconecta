import Image from "next/image";
import { HomeButton } from "../components/HomeButton/HomeButton";
import {
  Card,
  CardText,
  CardTitle,
  Container,
  Header,
  LoginIntro,
  Nav,
  Page,
  Title1,
  Title2,
} from "./styles";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { ResponsiveContent } from "../styles/globals";

export default function Login() {
  return (
    <Page>
      <Header>
        <Nav>
          <ResponsiveContent $hideOnDesktop>
            <Image
              src="/images/logo.svg"
              alt="Logo IFConecta, universidade e comunidade ligadas por uma linha tracejada que passa pela palavra 'IFConecta'"
              width={140}
              height={60}
              quality={100}
            />
          </ResponsiveContent>
          <HomeButton />
        </Nav>
      </Header>
      <Container>
        <ResponsiveContent $hideOnMobile>
          <LoginIntro>
            <h1> Conecte-se</h1>
            <p>
              Caso seja um professor da instituição, preencha com suas
              credencias para ter acesso aos projetos enviados.
            </p>
            <Image
              src="/images/logoBig.svg"
              alt="Logo"
              width={500}
              height={500}
            />
          </LoginIntro>
        </ResponsiveContent>

        <ResponsiveContent $hideOnDesktop>
          <Title1>IFConecta</Title1>
          <Title2>IFSULDEMINAS</Title2>
        </ResponsiveContent>
        <Card>
          <CardTitle>Login</CardTitle>
          <CardText>para professores</CardText>
          <LoginForm />
        </Card>
      </Container>
    </Page>
  );
}
