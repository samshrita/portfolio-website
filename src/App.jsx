 import { Route, Routes, useLocation, Navigate } from "react-router-dom"; //Navigate  navigte to navigate for projects
import AppLayout from "./ui/appLayout";
import Home from "./pages/homePage";
import AboutMePage from "./pages/aboutMePage";
import ContactMePage from "./pages/contactMePage";
import ErrorPage from "./pages/errorPage";
import Project from "./pages/project";
import { RoutingLinks } from "./data/data";
import { AnimatePresence } from "framer-motion";
import Education from "./ui/education";
import Experience from "./ui/experience";
import Blogs from "./pages/blogs";
function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={RoutingLinks.home} element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <Home />
              </>
            }
          />
        </Route>

        <Route path={RoutingLinks.projects} element={<AppLayout isProjectPage={true} />}>
          <Route
            index
            element={<Navigate to={RoutingLinks.projects + "/monument-recognition"} />}
          />
          <Route
            path="deepfake-detection"
            element={<Project projectTitle={"deepfake-detection"} />}
          />
          <Route
            path="monument-recognition"
            element={<Project projectTitle={"monument-recognition"} />}
          />
        </Route>

        <Route path={RoutingLinks.about} element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <AboutMePage />
              </>
            }
          />
        </Route>
        <Route path={RoutingLinks.blogs} element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <Blogs />
              </>
            }
          />
        </Route>
        <Route path={RoutingLinks.education} element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <Education />
              </>
            }
          />
        </Route>


        <Route path={RoutingLinks.experience} element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <Experience />
              </>
            }
          />
        </Route>

        <Route path={RoutingLinks.contact} element={<AppLayout />}>
          <Route
            index
            element={
              <>
                <ContactMePage />
              </>
            }
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
