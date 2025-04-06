"use client"
import Link from "next/link"
import styled from "styled-components";
// Create the styled components
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 2rem; 
  background-color: #f7f7f7; 
`;

const StyledH2 = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  padding: 1rem;
`;

const StyledNav = styled.nav`
  padding: 0.5rem; 
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: #333;
`;

export default function Header(){
    return(
      <StyledHeader>
          <StyledH2>Cat Images!</StyledH2>
          <StyledNav>
              <StyledLink href={`/`}>Home</StyledLink>
              <StyledLink href={`/about`}>About</StyledLink>
          </StyledNav>
      </StyledHeader>

    );
}