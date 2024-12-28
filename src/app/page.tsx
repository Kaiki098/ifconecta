"use client";

import React from "react";
import { Nav, NavList, NavLink } from "./home";

export default function Home() {
  return (
    <>
      <Nav>
        <NavList>
          <li>Apresentação</li>
          <li>Sobre</li>
          <li>Como funciona</li>
        </NavList>
        <NavLink href="/login">Login</NavLink>
      </Nav>
    </>
  );
}
