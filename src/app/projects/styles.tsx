"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { ResponsiveContent } from "../styles/globals";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Spinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.grey500};
  border-top: 8px solid ${({ theme }) => theme.colors.green700};
  border-radius: 50%;
  height: 100px;
  width: 100px;
  animation: ${spin} 1s linear infinite;
`;

const TopBar = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black800};
  padding: 1.5em 1em;
  justify-content: flex-end;
  margin-bottom: 1em;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const ResponsiveHeader = styled(ResponsiveContent)`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2em;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.white900};
    text-transform: uppercase;
    // TODO MELHORAR ESSA RESPONSIVIDADE
    @media (max-width: 1600px) {
      display: none;
    }

    @media (min-width: 1920px) {
      display: flex;
    }
  }
`;

const ProjectsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
  margin: 1em 2em 4em 2em;
  height: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

const BgImage = styled(Image)`
  position: fixed;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 2em;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.grey700};
`;

export { BgImage, ProjectsContainer, TopBar };
