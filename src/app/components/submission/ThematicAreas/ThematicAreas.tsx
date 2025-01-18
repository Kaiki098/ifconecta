import { InputHTMLAttributes } from "react";
import { Container, ThematicalLabel } from "./styles";
import { X } from "lucide-react";
import { THEMATIC_AREAS } from "@/app/types/thematicAreaAndGroups";

export default function ThematicAreas({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container>
      {THEMATIC_AREAS.map((area) => (
        <ThematicalLabel $variant={area} key={area}>
          <input type="checkbox" {...props} value={area} />
          {area}
          <X />
        </ThematicalLabel>
      ))}
    </Container>
  );
}
