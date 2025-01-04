"use client";

import Image from "next/image";
import { HomeButton } from "../components/HomeButton/HomeButton";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SearchInput from "../components/SearchInput/SearchInput";
import {
  BgImage,
  EmptyState,
  ProjectsContainer,
  ResponsiveHeader,
  TopBar,
} from "./styles";
import { Bounce, ToastContainer } from "react-toastify";
import { useState } from "react";
import { Project } from "../types/project";
import { Filters } from "../types/filter";

export default function ProjectsPage() {
  const projectsMock: Project[] = [
    {
      id: 0,
      thematicAreas: [
        "Saúde",
        "Tecnologia",
        "Meio Ambiente",
        "Educação",
        "Outro",
      ],
      tittle: "Lorem Impsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        group: "Comunidade",
        name: "Kaiki Alvarenga de Souza",
        contact: {
          email: "kaikialvarengasouza098@gmail.com",
          phone: "(35) 99871-6323",
          onlyWhatsapp: true,
        },
      },
    },
    {
      id: 1,
      thematicAreas: ["Saúde"],
      tittle: "Esse aoṕeopc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        group: "Empresa",
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
      thematicAreas: ["Saúde"],
      tittle: "pdfnpav ops",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        group: "Empresa",
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
      thematicAreas: ["Saúde"],
      tittle: "rgbp 2fd",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        group: "Empresa",
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
      thematicAreas: ["Saúde"],
      tittle: "sof cw",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        group: "Empresa",
        name: "Kaiki Alvarenga de Souza",
        contact: {
          email: "kaikialvarengasouza098@gmail.com",
          phone: "(35) 99871-6323",
          onlyWhatsapp: true,
        },
      },
    },
    {
      id: 5,
      thematicAreas: ["Saúde"],
      tittle: "ljkjeje",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        group: "Empresa",
        name: "Kaiki Alvarenga de Souza",
        contact: {
          email: "kaikialvarengasouza098@gmail.com",
          phone: "(35) 99871-6323",
          onlyWhatsapp: true,
        },
      },
    },
    {
      id: 7,
      thematicAreas: ["Saúde"],
      tittle: "Lorem Impsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        group: "Empresa",
        name: "Kaiki Alvarenga de Souza",
        contact: {
          email: "kaikialvarengasouza098@gmail.com",
          phone: "(35) 99871-6323",
          onlyWhatsapp: true,
        },
      },
    },
    {
      id: 8,
      thematicAreas: ["Saúde"],
      tittle: "Lorem Impsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      beneficiary: {
        group: "Empresa",
        name: "Kaiki Alvarenga de Souza",
        contact: {
          email: "kaikialvarengasouza098@gmail.com",
          phone: "(35) 99871-6323",
          onlyWhatsapp: true,
        },
      },
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Filters>({
    thematicAreas: [],
    group: "",
  });

  const filteredProjects = projectsMock.filter((project) => {
    const matchesSearch = project.tittle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesThematicAreas =
      activeFilters.thematicAreas.length === 0 ||
      project.thematicAreas.some((area) =>
        activeFilters.thematicAreas.includes(area),
      );

    const matchesGroup =
      activeFilters.group === "" ||
      project.beneficiary.group === activeFilters.group;

    return matchesSearch && matchesThematicAreas && matchesGroup;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <TopBar>
        <ResponsiveHeader $hideOnMobile>
          <Image
            src="/images/logo.svg"
            alt="Logo IFConecta, universidade e comunidade ligadas por uma linha tracejada que passa pela palavra 'IFConecta'"
            width={205}
            height={90}
            quality={100}
          />
          <h1>Projetos Cadastrados</h1>
        </ResponsiveHeader>
        <SearchInput
          onFilter={(newFilters) => setActiveFilters(newFilters)}
          onSearch={handleSearch}
        />
        <HomeButton />
      </TopBar>

      <ProjectsContainer>
        <BgImage
          src="/images/logoIFBG.png"
          alt="Logo IFSULDEMINAS"
          width={258}
          height={237}
          quality={100}
        />

        {filteredProjects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}

        {filteredProjects.length === 0 && (
          <EmptyState>Nenhum projeto encontrado</EmptyState>
        )}
      </ProjectsContainer>
    </>
  );
}
