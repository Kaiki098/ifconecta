"use client";

import React, { useEffect, useState } from "react";
import {
  Nav,
  NavList,
  Presentation,
  PresentationImage,
  PresentationContent,
  HeroContent,
  IconsRight,
  IconsLeft,
  SubmissionLink,
  LoginLink,
  About,
  HowItWorks,
  AboutContent,
  BigLogoImage,
  IconWrapper,
  WorkflowContainer,
  Line,
} from "./styles";
import Image from "next/image";
import { Blocks, BookCheck, Container, Workflow } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav>
        <Image
          src="/images/logo.svg"
          alt="Logo IFConecta, universidade e comunidade ligadas por uma linha tracejada que passa pela palavra 'IFConecta'"
          width={205}
          height={90}
          quality={100}
        />
        <NavList>
          <li>
            <a
              href="#presentation"
              className={activeSection === "presentation" ? "active" : ""}
            >
              Apresentação
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className={activeSection === "how-it-works" ? "active" : ""}
            >
              Como funciona
            </a>
          </li>
        </NavList>
        <LoginLink href="/login">Acessar projetos</LoginLink>
      </Nav>
      <main>
        <Presentation id="presentation">
          {/* TODO Melhorar alt */}
          <PresentationImage
            src="/images/presentationBgImg.png"
            alt="Pessoas apontando para um computador"
            width={1920}
            height={800}
          />
          <PresentationContent>
            <IconsLeft
              src="/images/iconesEsquerda.svg"
              alt="Icones"
              width={160}
              height={560}
            />
            <HeroContent>
              <h1>IFConecta</h1>
              <p>
                Conecte-se a nossa <br />
                instituição
              </p>
              <SubmissionLink href="/submission">
                Clique aqui para enviar sua proposta
              </SubmissionLink>
            </HeroContent>
            <IconsRight
              src="/images/iconesDireita.svg"
              alt="Icones"
              width={160}
              height={560}
            />
          </PresentationContent>
        </Presentation>
        <About id="about">
          <AboutContent>
            <span>Sobre</span>
            <h1>IFConecta</h1>
            <h2>O que é a plataforma?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vitae tincidunt turpis. Morbi vitae lectus ac orci pretium
              vehicula. Quisque.
            </p>
            <h2>O que é extensão</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vitae tincidunt turpis. Morbi vitae lectus ac orci pretium
              vehicula. Quisque.
            </p>
          </AboutContent>
          <BigLogoImage
            src="/images/logoBig.svg"
            alt="Logo IFConecta, universidade e comunidade ligadas por uma linha tracejada que passa pela palavra 'IFConecta'"
            width={500}
            height={500}
          />
        </About>
        <HowItWorks id="how-it-works">
          <h1>Como funciona?</h1>
          <WorkflowContainer>
            <Line viewBox="0 0 1128 159">
              <path d="M8.50003 138.5C392.427 -248.18 794.18 419.339 1119.6 4.91727" />
            </Line>
            <div>
              <h2>1. Envio do Projeto</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                fringilla sed dolor et tincidunt.
              </p>
              <IconWrapper>
                <BookCheck />
              </IconWrapper>
            </div>
            <div>
              <IconWrapper>
                <Workflow />
              </IconWrapper>
              <h2>2. Projeto em sala de aula</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                fringilla sed dolor et tincidunt.
              </p>
            </div>
            <div>
              <h2>3. Execução do projeto</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                fringilla sed dolor et tincidunt.
              </p>
              <IconWrapper>
                <Blocks />
              </IconWrapper>
            </div>
            <div>
              <IconWrapper>
                <Container />
              </IconWrapper>
              <h2>4. Conclusão do projeto</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                fringilla sed dolor et tincidunt.
              </p>
            </div>
          </WorkflowContainer>
        </HowItWorks>
      </main>
    </>
  );
}
