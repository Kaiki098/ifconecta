import Image from "next/image";
import { HomeButton } from "../components/HomeButton/HomeButton";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "./page.module.css";

export default function ProjectsPage() {
  const projectsMock = [
    {
      id: 1,
      thematicArea: "Saúde",
      tittle: "Lorem Impsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        type: "Empresa",
        name: "Kaiki Alvarenga de Souza",
        contact: {
          email: "kaikialvarengasouza098@gmail.com",
          phone: "(35) 99871-6323",
          onlyWhatsapp: true,
        },
      },
    },
    {
      id: 2,
      thematicArea: "Saúde",
      tittle: "Lorem Impsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        type: "Empresa",
        name: "Kaiki Alvarenga de Souza",
        contact: {
          email: "kaikialvarengasouza098@gmail.com",
          phone: "(35) 99871-6323",
          onlyWhatsapp: true,
        },
      },
    },
    {
      id: 3,
      thematicArea: "Saúde",
      tittle: "Lorem Impsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        type: "Empresa",
        name: "Kaiki Alvarenga de Souza",
        contact: {
          email: "kaikialvarengasouza098@gmail.com",
          phone: "(35) 99871-6323",
          onlyWhatsapp: true,
        },
      },
    },
    {
      id: 4,
      thematicArea: "Saúde",
      tittle: "Lorem Impsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        type: "Empresa",
        name: "Kaiki Alvarenga de Souza",
        contact: {
          email: "kaikialvarengasouza098@gmail.com",
          phone: "(35) 99871-6323",
          onlyWhatsapp: true,
        },
      },
    },
  ];

  return (
    <>
      <header className={styles.topBar}>
        <SearchInput />
        <HomeButton />
      </header>
      <main className={styles.projectsContainer}>
        <Image
          src="/images/logoIFBG.png"
          alt="Logo IFSULDEMINAS"
          width={258}
          height={237}
          quality={100}
          className={styles.bgImage}
        />
        {projectsMock.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </main>
    </>
  );
}
