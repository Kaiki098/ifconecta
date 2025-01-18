import { FooterContainer } from "./styles";
import Image from "next/image";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <div>
          <p>Consulte o cadastro do IFSULDEMINAS no e-MEC</p>
          <Image
            src="/images/rodape-MEC.png"
            alt="Icones"
            width={206}
            height={288}
          />
        </div>
        <div>
          <p>Redes Sociais</p>
          <a href="https://twitter.com/ifsuldeminas">Twitter</a>
          <a href="https://www.youtube.com/channel/UC73UAcaqQqVwu9m6ZACOaDw">
            Youtube
          </a>
          <a href="https://www.facebook.com/campuspassos/">Facebook</a>
          <a href="http://instagram.com/instagram">Instagram</a>
        </div>
        <div>
          <p>Informações sobre o Campus</p>
          <a href="">Contato</a>
          <a href="">E-mail</a>
          <a href="">Localização</a>
        </div>
      </div>
    </FooterContainer>
  );
}
