import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../ui/header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import ProjectList from "../data/data";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  padding: 4rem 2rem 6.4rem 2rem;
  overflow: scroll;
  @media (min-width: 1024px) {
    padding: 4rem 4.8rem 6.4rem 4.8rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  min-width: 16rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const H6 = styled.h6`
  display: inline-block;
  color: var(--purple);
  font-size: 1rem;
  font-family: "Space Grotesk", sans-serif;
`;

const Styledbtn = styled.button`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
  color: var(--purple);

  &:hover {
    color: var(--blue);
  }
`;

const projectList = ProjectList();

function ProjectsPage() {
  const location = useLocation().pathname;
  const closeSidebar = () => setShow(false);
  const projectData =
    projectList.filter(
      (project) =>
        project.navlink === location.slice(location.lastIndexOf("/") + 1),
    )[0] === undefined
      ? projectList.filter((project) => project.navlink === "monument-recognition")[0]
      : projectList.filter(
          (project) =>
            project.navlink === location.slice(location.lastIndexOf("/") + 1),
        )[0];

  const [showSidebar, setShow] = useState(false);
  const handleShowSidebar = () => setShow(true);
  useEffect(() => {
    document.title = "Project | Portfolio";
  }, []);

  return (
    <StyledAppLayout>
      <Header />

      <Sidebar show={showSidebar} closeSidebar={closeSidebar} />

      <Main>
        <Container>
          <div className="flex items-center w-full pb-2 border-b-[var(--purple)] border-b-2 gap-4 mt-2 lg:hidden">
            {!showSidebar ? (
              <Styledbtn onClick={handleShowSidebar}>
                <TbLayoutSidebarLeftExpand className="h-8 w-8 " />
              </Styledbtn>
            ) : (
              ""
            )}

            {(() => {
             
               if (projectData.projectType === "ml") {
                return (
                  <H6>
                    Project &gt; Machine Learning &gt;{" "}
                    <b>{projectData.projectSmallTitle}</b>
                  </H6>
                );
         
              } else {
                return <H6>Project &gt; </H6>;
              }
            })()}
          </div>

          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default ProjectsPage;
