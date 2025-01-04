import { InputHTMLAttributes } from "react";
import { Container, ThematicalLabel } from "./styles";
import { Check } from "lucide-react";
import { THEMATIC_AREAS } from "@/app/types/thematicArea";

export default function ThematicAreas({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container>
      {THEMATIC_AREAS.map((area) => (
        <ThematicalLabel $variant={area} key={area}>
          <input type="checkbox" {...props} value={area} />
          <Check />
          {area}
        </ThematicalLabel>
      ))}
    </Container>
  );
}
