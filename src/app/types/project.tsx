import { ThematicArea } from "./thematicArea";

export interface Project {
  id: number;
  thematicAreas: ThematicArea[];
  tittle: string;
  description: string;
  beneficiary: {
    group: "Empresa" | "Comunidade";
    name: string;
    contact: {
      email: string;
      phone: string;
      onlyWhatsapp: boolean;
    };
  };
}
