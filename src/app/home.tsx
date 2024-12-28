import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black800};
  color: var(--white-900);
`;

const NavList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  color: ${({ theme }) => theme.colors.white900};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white900};
`;

export { Nav, NavLink, NavList };
