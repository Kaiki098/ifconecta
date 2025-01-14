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
  Footer,
  WorkflowText,
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
          priority
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
          <figure>
            <PresentationImage
              src="/images/presentationBgImg.png"
              alt="Pessoas apontando para um computador"
              width={1920}
              height={800}
              priority
            />
            <figcaption>
              Imagem por{" "}
              <a href="https://unsplash.com/pt-br/fotografias/three-person-pointing-the-silver-laptop-computer-2FPjlAyMQTA">
                John Schnobrich
              </a>{" "}
              na <a href="https://unsplash.com">Unsplash</a>.
            </figcaption>
          </figure>
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
                Conecte-se à nossa <br />
                instituição
              </p>
              <SubmissionLink href="/submission">
                Envie sua proposta
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
            A plataforma IF Conecta promove a colaboração entre a comunidade 
            e alunos de Ciência da Computação do IF, permitindo que compartilhem 
            problemas do cotidiano para soluções tecnológicas. Os estudantes 
            aplicam seus conhecimentos para ajudar a resolver essas questões, 
            criando um ambiente de troca de ideias e soluções para os desafios diários.
            </p>
            <h2>O que é extensão?</h2>
            <p>
            A extensão universitária aproxima a universidade da sociedade, aplicando 
            o conhecimento acadêmico para resolver problemas reais e contribuir para 
            o bem-estar da população. Ela integra a universidade com a comunidade e 
            vai além da sala de aula.
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
              <WorkflowText>
                <h2>1. Envio do Projeto</h2>
                <p>
                Descreva o problema ou desafio que você gostaria que nossos 
                alunos de Ciência da Computação resolvessem, cadastrando 
                sua ideia ou projeto.
                </p>
              </WorkflowText>
              <IconWrapper>
                <BookCheck />
              </IconWrapper>
            </div>
            <div>
              <IconWrapper>
                <Workflow />
              </IconWrapper>
              <WorkflowText>
                <h2>2. Projeto em sala de aula</h2>
                <p>
                Após enviar sua proposta os alunos estudarão o desafio, farão 
                pesquisas e definirão o melhor plano para a solução, 
                aplicando aprendizado prático.
                </p>
              </WorkflowText>
            </div>
            <div>
              <WorkflowText>
                <h2>3. Execução do projeto</h2>
                <p>
                Nesta fase, os alunos desenvolverão as soluções técnicas, com 
                interação contínua para ajustes, feedbacks e melhorias, 
                garantindo que o resultado atenda às expectativas.
                </p>
              </WorkflowText>
              <IconWrapper>
                <Blocks />
              </IconWrapper>
            </div>
            <div>
              <IconWrapper>
                <Container />
              </IconWrapper>
              <WorkflowText>
                <h2>4. Conclusão do projeto</h2>
                <p>
                Ao final, você receberá o projeto concluído e poderá avaliar os 
                resultados, sugerir melhorias e fornecer feedback para 
                aprimorar futuros projetos.
                </p>
              </WorkflowText>
            </div>
          </WorkflowContainer>
        </HowItWorks>
      </main>
      <Footer>
        <div>

        <div>
          <p>Consulte o cadastro do IFSULDEMINAS no e-MEC</p>
          <Image  
              src="/images/rodape-MEC.png"
              alt="Icones"
              width={206}
              height={288}
              />
        </div>
        <div>
          <p>Redes Sociais</p>
          <a href="https://twitter.com/ifsuldeminas">Twitter</a>
          <a href="https://www.youtube.com/channel/UC73UAcaqQqVwu9m6ZACOaDw">Youtube</a>
          <a href="https://www.facebook.com/campuspassos/">Facebook</a>
          <a href="http://instagram.com/instagram">Instagram</a>
        </div>
        <div>
          <p>Informações sobre o Campus</p>
          <a href="">Contato</a>
          <a href="">E-mail</a>
          <a href="">Localização</a>
        </div>
              </div>
      </Footer>
    </>
  );
}
