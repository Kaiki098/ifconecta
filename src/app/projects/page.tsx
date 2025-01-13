"use client";

import Image from "next/image";
import { HomeButton } from "../components/HomeButton/HomeButton";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SearchInput from "../components/SearchInput/SearchInput";
import {
  BgImage,
  EmptyState,
  PageContainer,
  ProjectsContainer,
  ResponsiveHeader,
  Spinner,
  SpinnerContainer,
  TopBar,
} from "./styles";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Project } from "../types/project";
import { Filters } from "../types/filter";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Filters>({
    thematicAreas: [],
    groups: [],
  });
  const router = useRouter();

  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
  }

  useEffect(() => {
    const fetchProjects = async () => {
      const authToken = getCookie("auth");
      if (!authToken) {
        router.push("/login");
        return;
      }

      const cachedProjects = localStorage.getItem("projects");
      if (cachedProjects) {
        setProjects(JSON.parse(cachedProjects));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          process.env.IFCONECTA_API_URL + "/projects",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          },
        );

        const result = await response.json();

        if (result.success && result.data) {
          setProjects(result.data);
          localStorage.setItem("projects", JSON.stringify(result.data));
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Erro ao carregar projetos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [router]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesThematicAreas =
      activeFilters.thematicAreas.length === 0 ||
      project.thematicAreas.some((area) =>
        activeFilters.thematicAreas.includes(area),
      );

    const matchesGroup =
      activeFilters.groups.length === 0 ||
      activeFilters.groups.includes(project.beneficiary.group);

    return matchesSearch && matchesThematicAreas && matchesGroup;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <PageContainer>
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

        {loading ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <EmptyState>Nenhum projeto encontrado</EmptyState>
        )}
      </ProjectsContainer>
    </PageContainer>
  );
}
