import { LoginLink, Nav, NavList } from "./styles";
import Image from "next/image";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  return (
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
  );
}
