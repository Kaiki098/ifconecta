import { Blocks, BookCheck, Container, Workflow } from "lucide-react";
import {
  HowItWorksContainer,
  IconWrapper,
  Line,
  WorkflowContainer,
  WorkflowText,
} from "./styles";

export default function HowItWorks() {
  return (
    <HowItWorksContainer id="how-it-works">
      <h1>Como funciona?</h1>
      <WorkflowContainer>
        <Line viewBox="0 0 1128 159">
          <path d="M8.50003 138.5C392.427 -248.18 794.18 419.339 1119.6 4.91727" />
        </Line>
        <div>
          <WorkflowText>
            <h2>1. Envio do Projeto</h2>
            <p>
              Descreva o problema ou desafio que você gostaria que nossos alunos
              resolvessem, cadastrando sua ideia ou projeto.
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
              Após enviar sua proposta, os alunos estudarão o desafio e
              definirão o melhor plano para a solução.
            </p>
          </WorkflowText>
        </div>
        <div>
          <WorkflowText>
            <h2>3. Execução do projeto</h2>
            <p>
              Nesta fase, os alunos desenvolverão as soluções técnicas, com
              interação contínua para ajustes e melhorias.
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
              Ao final, você receberá o projeto concluído e poderá fornecer
              feedback para aprimorar futuros projetos.
            </p>
          </WorkflowText>
        </div>
      </WorkflowContainer>
    </HowItWorksContainer>
  );
}
