import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { RoutingLinks } from "../data/data";


const StyledDropdownDiv = styled.div`
  position: relative;
  width: 20%;
  justify-content: center;
`;

const StyledDropdownDivContent = styled.div`
  position: absolute;
  background-color: var(--background);
  min-width: 12rem;
  border-radius: 0.4rem;
  margin-top: 2.4rem;
  box-shadow: 0 0.3rem 2rem rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const StyledDropdownDivContentA = styled.a`
  display: block;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => (props.$isactive ? " var(--accent)" : " var(--text)")};
  padding: 0.8rem 4rem 0.8rem 2rem;
  font-family: "Space Grotesk", sans-serif;

  &:hover {
    color: ${(props) =>
      props.$isactive ? " var(--accent)" : "var(--blue)"};
  }
`;

const StyledBtn = styled.button`
  text-align: center;
  align-items: center;
  width: fit-content;
  font-size: 1.6rem;
  font-family: "Space Grotesk", sans-serif;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
  color: var(--accent);

  &:hover {
    color: var(--blue);
  }
`;

function Header() {
  const location = useLocation();
  const [showDropdown, setShow] = useState(false);
  const [activePage, setActive] = useState("/");

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const handleShowDropdown = () => setShow(!showDropdown);

  return (
    <header>
      <a href={RoutingLinks.home} className="logo">
       <img src="logo-1.png" title="website logo" alt="website logo" style={{ width: '160px', height: '40px' }} />
      </a>

      <nav className="navbar">
        <ul>
          <li>
            <a
              className={activePage === RoutingLinks.home ? "active" : ""}
              href={RoutingLinks.home}
            >
              Home
            </a>
          </li>

          <li>
            <a
              className={
                activePage.includes(RoutingLinks.projects) ? "active" : ""
              }
              href={RoutingLinks.projects}
            >
              Project
            </a>
          </li>
          <li>
            <a
              className={
                activePage.includes(RoutingLinks.about) ? "active" : ""
              }
              href={RoutingLinks.about}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={
                activePage.includes(RoutingLinks.experience) ? "active" : ""
              }
              href={RoutingLinks.experience}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className={
                activePage.includes(RoutingLinks.education) ? "active" : ""
              }
              href={RoutingLinks.education}
            >
              Education
            </a>
          </li>
          <li>
            <a
              className={
                activePage.includes(RoutingLinks.blogs) ? "active" : ""
              }
              href={RoutingLinks.blogs}
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              className={
                activePage.includes(RoutingLinks.contact) ? "active" : ""
              }
              href={RoutingLinks.contact}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <StyledDropdownDiv className="flex md:hidden">
        <StyledBtn onClick={handleShowDropdown}>
          {showDropdown ? <FaTimes /> : <FaBars />}
        </StyledBtn>

        <StyledDropdownDivContent className={showDropdown ? "block" : "hidden"}>
          <StyledDropdownDivContentA
            $isactive={activePage === RoutingLinks.home}
            href={RoutingLinks.home}
          >
            Home
          </StyledDropdownDivContentA>
          <StyledDropdownDivContentA
            $isactive={activePage.includes(RoutingLinks.projects)}
            href={RoutingLinks.projects}
          >
            Project
          </StyledDropdownDivContentA>
          <StyledDropdownDivContentA
            $isactive={activePage.includes(RoutingLinks.about)}
            href={RoutingLinks.about}
          >
            About Me
          </StyledDropdownDivContentA>
          <StyledDropdownDivContentA
            $isactive={activePage.includes(RoutingLinks.contact)}
            href={RoutingLinks.contact}
          >
            Education
          </StyledDropdownDivContentA>
          <StyledDropdownDivContentA
            $isactive={activePage.includes(RoutingLinks.education)}
            href={RoutingLinks.education}
          >
            Experience
          </StyledDropdownDivContentA>
          <StyledDropdownDivContentA
            $isactive={activePage.includes(RoutingLinks.experience)}
            href={RoutingLinks.experience}
          >
            Contact
          </StyledDropdownDivContentA>
        </StyledDropdownDivContent>
      </StyledDropdownDiv>
    </header>
  );
}

export default Header;
