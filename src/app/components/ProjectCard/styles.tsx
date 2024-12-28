import { Copy, Mail, Minus, Phone, Plus } from "lucide-react";
import styled from "styled-components";

export const Card = styled.article`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 16px;
  border: 4px solid rgba(0, 0, 0, 0.05);
  background: ${({ theme }) => theme.colors.white900};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0 1em;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ThematicAreaIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 0.1em 0.6em;
  background-color: ${({ theme }) => theme.colors.green100};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.green600};
  font-size: 0.875rem;
  font-weight: 700;
`;

export const GroupInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;

  & strong {
    font-weight: 600;
  }

  & h2 {
    font-size: 0.875rem;
  }

  & p {
    font-size: 0.75rem;
  }
`;

export const OverflowHidden = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
`;

export const BeneficiaryInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;

  & h3 {
    font-size: 0.875rem;
  }

  & p {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    gap: 1em;
  }

  & > p:first-of-type {
    gap: 0.5em;
  }

  & p strong {
    font-size: 0.75rem;
  }

  & h4 strong {
    font-size: 0.75rem;
  }
`;

export const Contact = styled.address`
  display: flex;
  flex-direction: column;
`;

export const PhoneIcon = styled(Phone)`
  width: 1.25em;
`;

export const MailIcon = styled(Mail)`
  width: 1.25em;
`;

export const CopyIcon = styled(Copy)`
  width: 0.75em;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.1em 0.4em 0.1em 0.6em;
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white900};
  background-color: ${({ theme }) => theme.colors.green500};
  font-size: 0.875rem;
  gap: 0.1em;
`;

export const MinusIcon = styled(Minus)`
  width: 1em;
  height: 1em;
`;

export const PlusIcon = styled(Plus)`
  width: 1em;
  height: 1em;
`;
