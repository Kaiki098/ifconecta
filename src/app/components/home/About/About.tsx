import { AboutContainer, AboutContent, BigLogoImage } from "./styles";

export default function About() {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <span>Sobre</span>
        <h1>IFConecta</h1>
        <h2>O que é a plataforma?</h2>
        <p>
          A plataforma IFConecta promove a colaboração entre a comunidade e
          alunos do IF, permitindo que compartilhem problemas do cotidiano para
          soluções tecnológicas. Os estudantes aplicam seus conhecimentos para
          ajudar a resolver essas questões, criando um ambiente de troca de
          ideias e soluções para os desafios diários.
        </p>
        <h2>O que é extensão?</h2>
        <p>
          A extensão universitária aproxima a universidade da sociedade,
          aplicando o conhecimento acadêmico para resolver problemas reais e
          contribuir para o bem-estar da população. Ela integra a universidade
          com a comunidade e vai além da sala de aula.
        </p>
      </AboutContent>
      <BigLogoImage
        src="/images/logoBig.svg"
        alt="Logo IFConecta, universidade e comunidade ligadas por uma linha tracejada que passa pela palavra 'IFConecta'"
        width={500}
        height={500}
      />
    </AboutContainer>
  );
}
