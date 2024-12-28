"use client";

import Image from "next/image";
import styled from "styled-components";

const TopBar = styled.div`
  display: flex;
  gap: 1em;
  background-color: ${({ theme }) => theme.colors.black800};
  padding: 1.5em 0;
  justify-content: space-around;
  margin-bottom: 1em;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const BgImage = styled(Image)`
  position: fixed;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { BgImage, ProjectsContainer, TopBar };
