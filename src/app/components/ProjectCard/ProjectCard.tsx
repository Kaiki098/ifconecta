"use client";

import { useState } from "react";
import { Group } from "@mui/icons-material";
import { Building2 } from "lucide-react";
import {
  Card,
  Header,
  Body,
  BeneficiaryInfo,
  Contact,
  Footer,
  Button,
  GroupInfo,
  ThematicAreaIcon,
  MinusIcon,
  PlusIcon,
  PhoneIcon,
  MailIcon,
  CopyIcon,
  Description,
} from "./styles";

interface ProjectCardProps {
  project: {
    thematicArea: "Saúde" | "Tecnologia" | string;
    tittle: string;
    description: string;
    beneficiary: {
      type: "Empresa" | "Comunidade" | string;
      name: string;
      contact: {
        email: string;
        phone: string;
        onlyWhatsapp: boolean;
      };
    };
  };
}

export default function ProjectCard({
  project: {
    thematicArea,
    tittle,
    description,
    beneficiary: {
      type,
      name,
      contact: { email, phone, onlyWhatsapp },
    },
  },
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(name, email, phone, onlyWhatsapp);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const typeIcon = type === "Empresa" ? <Building2 /> : <Group />;

  return (
    <Card>
      <Header>
        <ThematicAreaIcon>{thematicArea}</ThematicAreaIcon>
        <GroupInfo>
          {typeIcon}
          {isExpanded ? type : ""}
        </GroupInfo>
      </Header>
      <Body>
        <h2>
          <strong>{tittle}</strong>
        </h2>
        <Description $isExpanded={isExpanded}>{description}</Description>
        {isExpanded && (
          <BeneficiaryInfo>
            <h3>
              <strong>Informações do beneficiário: </strong>
            </h3>
            <p>
              <strong>Nome:</strong> {name}
            </p>
            <h4>
              <strong>Contato: </strong>
            </h4>
            <Contact>
              <p>
                <PhoneIcon /> {phone} <CopyIcon />
                {onlyWhatsapp && "(Apenas Whatsapp)"}
              </p>
              <p>
                <MailIcon /> {email}
                <CopyIcon />
              </p>
            </Contact>
          </BeneficiaryInfo>
        )}
      </Body>
      <Footer>
        <Button onClick={toggleExpand}>
          {isExpanded ? (
            <>
              Ver menos
              <MinusIcon />
            </>
          ) : (
            <>
              Ver mais
              <PlusIcon />
            </>
          )}
        </Button>
      </Footer>
    </Card>
  );
}
