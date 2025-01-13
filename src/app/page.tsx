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
              A plataforma IF Conecta é um espaço inovador que visa promover a 
              colaboração entre a comunidade e os alunos de Ciência da Computação do IF.
              Aqui, qualquer pessoa pode compartilhar problemas do cotidiano que necessitam
              de soluções tecnológicas, e nossos estudantes têm a oportunidade de aplicar 
              seus conhecimentos para ajudar a resolver essas questões. Seja para melhorar a
              vida de todos com soluções criativas ou para desenvolver novos projetos, o 
              IF Conecta busca criar um ambiente de troca de ideias e soluções para os desafios
              do dia a dia. Através dessa iniciativa, você pode fazer a diferença na sociedade 
              enquanto contribui para o aprendizado prático dos futuros profissionais de tecnologia.
            </p>
            <h2>O que é extensão?</h2>
            <p>
            A extensão universitária é uma das três funções acadêmicas principais das universidades, 
            ao lado do ensino e da pesquisa. Ela tem como objetivo principal aproximar a universidade 
            da sociedade, levando o conhecimento produzido na academia para fora dos muros da instituição, 
            além de integrar a universidade com a comunidade em que está inserida. A extensão promove 
            atividades e projetos que envolvem a aplicação prática do conhecimento acadêmico para resolver 
            problemas reais da sociedade e contribuir para o bem-estar da população. A Extensão Universitária 
            desempenha um papel crucial ao levar o conhecimento acadêmico para fora da sala de aula e beneficiar a sociedade.
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
                Cadastre sua ideia ou projeto descrevendo o problema ou desafio que você gostaria que nossos 
                alunos de Ciência da Computação resolvessem. Seja claro e detalhado para que possamos entender 
                suas necessidades e encaminhá-las da melhor forma para a equipe de estudantes.
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
                Após o envio da sua proposta, a ideia será discutida nas aulas de Ciência da Computação. Nossos 
                alunos irão estudar o desafio, realizar pesquisas e se reunir para definir o melhor plano de ação 
                para o desenvolvimento da solução. O aprendizado prático será aplicado neste estágio.
                </p>
              </WorkflowText>
            </div>
            <div>
              <WorkflowText>
                <h2>3. Execução do projeto</h2>
                <p>
                Nesta fase, nossos alunos começarão a executar o projeto, desenvolvendo as soluções técnicas para o 
                problema ou ideias propostas. Durante a execução, haverá interação contínua para ajustes, feedbacks 
                e possíveis melhorias no projeto, garantindo que o resultado atenda às suas expectativas.
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
                Ao final da execução, você receberá o projeto concluído. Nossa equipe e os alunos estarão disponíveis 
                para apresentar as soluções desenvolvidas e discutir o impacto do trabalho. Você poderá avaliar os resultados 
                e sugerir melhorias, além de fornecer um feedback para que possamos aprimorar futuros projetos.
                </p>
              </WorkflowText>
            </div>
          </WorkflowContainer>
        </HowItWorks>
      </main>
      <Footer>a</Footer>
    </>
  );
}
