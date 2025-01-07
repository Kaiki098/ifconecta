"use client";

import { useState } from "react";
import { GroupsOutlined } from "@mui/icons-material";
import { Building2 } from "lucide-react";
import {
  Card,
  BeneficiaryInfo,
  Contact,
  Button,
  GroupInfo,
  ThematicAreaIcon,
  MinusIcon,
  PlusIcon,
  PhoneIcon,
  MailIcon,
  CopyIcon,
  Description,
  ThematicAreaWrapper,
  ProjectMeta,
  ProjectContent,
  ActionBar,
} from "./styles";
import { toast } from "react-toastify";
import { Project } from "@/app/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project: {
    thematicAreas,
    tittle,
    description,
    beneficiary: {
      group,
      name,
      contact: { email, phone, onlyWhatsapp },
    },
  },
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const groupIcon = group === "Empresa" ? <Building2 /> : <GroupsOutlined />;

  const handleCopy = async (text: string, type: "Telefone" | "Email") => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copiado!`);
    } catch (e) {
      console.log(e);
      toast.error("Erro ao copiar");
    }
  };

  return (
    <Card>
      <ProjectMeta>
        <ThematicAreaWrapper>
          {thematicAreas.map((area) => (
            <ThematicAreaIcon key={area} $variant={area}>
              {area}
            </ThematicAreaIcon>
          ))}
        </ThematicAreaWrapper>

        <GroupInfo>
          {groupIcon}
          {isExpanded ? group : ""}
        </GroupInfo>
      </ProjectMeta>
      <ProjectContent>
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
                <PhoneIcon /> {phone}{" "}
                <CopyIcon onClick={() => handleCopy(phone, "Telefone")} />
                {onlyWhatsapp && "(Apenas Whatsapp)"}
              </p>
              <p>
                <MailIcon /> {email}
                <CopyIcon onClick={() => handleCopy(phone, "Email")} />
              </p>
            </Contact>
          </BeneficiaryInfo>
        )}
      </ProjectContent>
      <ActionBar>
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
      </ActionBar>
    </Card>
  );
}
