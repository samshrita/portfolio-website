import Header from "./header";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import ProjectsPage from "../pages/projectsPage";
import { RoutingLinks } from "../data/data";

function AppLayout({ isProjectPage = false }) {
  const location = useLocation();

  return (
    <>
      {!isProjectPage || location.pathname === RoutingLinks.projects ? (
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      ) : (
        ""
      )}

      {isProjectPage ? (
        <ProjectsPage />
      ) : (
        <div>
          <Header />

          <main className="flex flex-col items-center  pt-12 bg-center bg-fixed bg-[var(--background)]">
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}

export default AppLayout;
