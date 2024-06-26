import { useEffect } from "react";

function ErrorPage() {
  useEffect(() => {
    document.title = "Page Not Found | Portfolio";
  }, []);

  return (
    <div className="flex flex-col pb-16 border-2 w-full h-screen items-center justify-center bg-[var(--background)]">
      <img
        src="pagenotfound-image.png"
        alt="Page Not Found Image"
        title="Page Not Found Image"
      ></img>
      <h1 className="text-[2rem] font-spaceGrotesk">404 Page Not Found</h1>
    </div>
  );
}
export default ErrorPage;
