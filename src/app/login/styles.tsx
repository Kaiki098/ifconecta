import styled from "styled-components";

const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.black800};
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1em;
`;

const Container = styled.main`
  position: absolute;
  margin: auto;
`;

const Title1 = styled.h1`
  color: ${({ theme }) => theme.colors.green300};
  font-size: 2rem;
  font-weight: 800;
`;

const Title2 = styled.h2`
  color: ${({ theme }) => theme.colors.white900};
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1em;
`;

const Card = styled.section`
  background-color: ${({ theme }) => theme.colors.green700};
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1.75em;
  border-radius: 16px;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white900};
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.white900};
  margin-bottom: 1em;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.white900};
  font-size: 0.875rem;
  font-weight: 700;
`;

interface InputProps {
  $error?: boolean;
}

const Input = styled.input<InputProps>`
  border-radius: 8px;
  height: 2.5em;
  width: 14em;
  padding: 0.75em;
  border: 2px solid ${({ $error }) => ($error ? "red" : "transparent")};

  &:focus {
    border-color: ${({ theme }) => theme.colors.green300};
    outline: none;
  }
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
`;

const Button = styled.button`
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  background-color: ${({ theme }) => theme.colors.black800};
  color: ${({ theme }) => theme.colors.white900};
  border: none;
  border-radius: 8px;
  font-weight: 800;
  width: fit-content;
  margin: 1.5em auto 0.5em auto;
`;

export {
  Page,
  Header,
  Nav,
  Container,
  Title1,
  Title2,
  Card,
  CardTitle,
  CardText,
  Field,
  Label,
  Input,
  Fieldset,
  Button,
};
