"use client";

import { useState } from "react";
import { Group } from "@mui/icons-material";
import styles from "./style.module.css";
import { Building2, Minus, Plus, Phone, Mail, Copy } from "lucide-react";
import ThematicAreaIcon from "../ThematicAreaIcon/ThematicAreaIcon";

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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const typeIcon = type === "Empresa" ? <Building2 /> : <Group />;

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <ThematicAreaIcon thematicArea={thematicArea} />
        <span>
          {typeIcon}
          {isExpanded ? type : ""}
        </span>
      </header>
      <section className={styles.body}>
        <h2>
          <strong>{tittle}</strong>
        </h2>
        <p className={!isExpanded ? styles.overflowHidden : ""}>
          {description}
        </p>
        {isExpanded && (
          <section className={styles.beneficiaryInfo}>
            <h3>
              <strong>Informações do beneficiário: </strong>
            </h3>
            <p>
              <strong>Nome:</strong> {name}
            </p>
            <h4>
              <strong>Contato: </strong>
            </h4>
            <address className={styles.contact}>
              <p>
                <Phone className={styles.contactIcon} /> {phone}{" "}
                <Copy className={styles.copyIcon} />
                {onlyWhatsapp && "(Apenas Whatsapp)"}
              </p>
              <p>
                <Mail className={styles.contactIcon} /> {email}
                <Copy className={styles.copyIcon} />
              </p>
            </address>
          </section>
        )}
      </section>
      <footer className={styles.footer}>
        <button className={styles.button} onClick={toggleExpand}>
          {isExpanded ? (
            <>
              Ver menos
              <Minus />
            </>
          ) : (
            <>
              Ver mais
              <Plus className={styles.buttonIcon} />
            </>
          )}
        </button>
      </footer>
    </article>
  );
}
