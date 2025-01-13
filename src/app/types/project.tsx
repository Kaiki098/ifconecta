import { ThematicArea } from "./thematicAreaAndGroups";

export interface Project {
  id: number;
  thematicAreas: ThematicArea[];
  title: string;
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
