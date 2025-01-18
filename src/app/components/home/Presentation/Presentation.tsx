import {
  HeroContent,
  IconsLeft,
  IconsRight,
  PresentationContainer,
  PresentationContent,
  PresentationImage,
  SubmissionLink,
} from "./styles";

export default function Presentation() {
  return (
    <PresentationContainer id="presentation">
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
          <SubmissionLink href="/submission">Envie sua proposta</SubmissionLink>
        </HeroContent>
        <IconsRight
          src="/images/iconesDireita.svg"
          alt="Icones"
          width={160}
          height={560}
        />
      </PresentationContent>
    </PresentationContainer>
  );
}
