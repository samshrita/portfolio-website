import WobbleCircle from "../components/wobbleCircle";
import IntroDiv from "../components/introDiv";
function IntroSection() {
  return (
    <section
      className="h-auto lg:h-screen w-full bg-center bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: `url("bg.png")` }}
    >
      <div className="flex flex-wrap py-20">
      <div className="w-full flex justify-center lg:justify-start lg:pl-40 lg:pr-16 lg:py-10 lg:w-3/5">
        <IntroDiv />
      </div>

        <div className="w-full flex  p-10 justify-center lg:justify-start  lg:w-2/5 ">
          <WobbleCircle />
        </div>
      </div>
    </section>
  );
}
export default IntroSection;
