import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black800};
  color: ${({ theme }) => theme.colors.white900};
  z-index: 10;

  @media (max-width: 1024px) {
    padding: 0.5em 1em;
  }

  @media (max-width: 580px) {
    & img {
      height: 60px;
      width: auto;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1em;
  list-style: none;

  li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white900};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: ${({ theme }) => theme.font.weights.bold};
    text-transform: uppercase;
    transition:
      background-color 0.2s ease,
      border-radius 0.2s ease,
      padding 0.2s ease;

    &.active {
      padding: 0.5em 1em;
      border-radius: ${({ theme }) => theme.borderRadius.small};
      background-color: ${({ theme }) => theme.colors.grey700};
    }

    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.font.sizes.normal};
    }
  }

  @media (max-width: 810px) {
    display: none;
  }
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weights.extrabold};
  padding: 0.5em 1.5em;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.white900};
  background-color: ${({ theme }) => theme.colors.green700};
  transition:
    font-size 0.2s,
    background-color 0.2s;

  &:hover {
    font-size: calc(${({ theme }) => theme.font.sizes.normal} + 0.1rem);
    background-color: #0de974;
  }

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.font.sizes.small};

    &:hover {
      font-size: calc(${({ theme }) => theme.font.sizes.small} + 0.1rem);
      background-color: #0de974;
    }
  }

  @media (max-width: 440px) {
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    text-align: center;

    &:hover {
      font-size: ${({ theme }) => theme.font.sizes.xsmall};
      background-color: #0de974;
    }
  }
`;
