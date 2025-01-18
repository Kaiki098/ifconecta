"use client";

import Image from "next/image";
import { HomeButton } from "../components/HomeButton/HomeButton";
import {
  Footer,
  Introduction,
  SubmissionContainer,
  SubmissionHeader,
  Triangle,
} from "./styles";
import SubmissionForm from "../components/submission/SubmissionForm/SubmissionForm";
import { ResponsiveContent } from "../styles/globals";
import { Bounce, ToastContainer } from "react-toastify";

export default function SubmissionPage() {
  return (
    <>
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
      <SubmissionHeader>
        <Image
          src="/images/logo.svg"
          alt="Logo IFConecta, universidade e comunidade ligadas por uma linha tracejada que passa pela palavra 'IFConecta'"
          width={100}
          height={44}
        />
        <h1>Cadastrar novo projeto</h1>
        <HomeButton />
      </SubmissionHeader>
      <SubmissionContainer>
        <ResponsiveContent $hideOnMobile>
          <Introduction>
            <Image
              src="/images/logo.svg"
              alt="Logo IFConecta, universidade e comunidade ligadas por uma linha tracejada que passa pela palavra 'IFConecta'"
              width={285}
              height={125}
              quality={100}
            />
            <p>
              Após preencher com suas informações e os dados do projeto, você
              receberá uma mensagem por e-mail ou WhatsApp caso seu projeto seja
              selecionado.
            </p>
            <Triangle />
          </Introduction>
        </ResponsiveContent>
        {/* TODO Tornar isso uma section com h1 etc */}
        <SubmissionForm />
      </SubmissionContainer>
      <ResponsiveContent $hideOnDesktop>
        <Footer>
          <p>
            Caso seu projeto seja selecionado, você receberá uma mensagem por
            e-mail ou WhatsApp.
          </p>
        </Footer>
      </ResponsiveContent>
    </>
  );
}
