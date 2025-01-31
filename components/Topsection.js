// import Carousel from "../components/Carousel"
// import Carsel from "../components/Carsel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Topsection() {
  const images = [
    "/imgs/me/me_NY.png",
    "/imgs/me/mepalmtrees.png",
    "/imgs/me/mesnowb.png",
    "/imgs/me/meTanky.jpg",
  ];

  // const isMobile = window.innerWidth <= 768;
  const isMobile = false;

  if (!isMobile) {
    const uh = { "max-width": "min(95%, 750px)", "min-width": "40%" };
    // const ok = {}
    //className="m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"

    return (
      // <div style={uh} className="block h-full">
      // <div className="block h-full max-w-rqmax min-w-rqmin">
      // <div className="block h-full w-full flex flex-col justify-center">
      <div className="block h-full w-full">
        {/* <div className="mx-0 container"> */}
        <div className="mx-0">
          <div className="md:grid md:grid-cols-10 md:gap-2 ">
            {/* <div className=" md:flex md:flex-row md:justify-end md:p-3 md:col-span-4 md:h-full"> */}
            <div className="flex flex-col justify-center md:p-3 md:col-span-5 xl:col-span-3 md:h-full ">
              {/* <div className="w-full md:p-3 md:w-9/12 md:h-full md:flex md:flex-row md:items-end"> */}
              {/* <div className="container min-w-rqmin max-w-rqmax bg-red-800"> */}
              {/* <div className="mx-auto max-w-screen-sm bg-red-800"> */}
              {/* <div className="container min-w-rqmin max-w-rqmax bg-blue-800"> */}
              <div className="">
                <Carousel
                  className="h-full flex justify-center"
                  width={"100%"}
                  showThumbs={false}
                  interval={3000}
                  autoPlay={true}
                  infiniteLoop={true}
                  showStatus={false}
                  showIndicators={false}
                  dynamicHeight={false}
                >
                  <div className="h-full">
                    <img src={images[0]} />
                    {/* <img className="w-spec" style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}} src={images[0]} /> */}
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                    <img src={images[1]} />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <img src={images[2]} />
                    {/* <p className="legend">Legend 3</p> */}
                  </div>
                  <div>
                    <img src={images[3]} />
                    {/* <p className="legend">Legend 3</p> */}
                  </div>
                </Carousel>
              </div>
            </div>
            {/* <div className="w-screen flex justify-center">
                    <Carousel/>
                </div> */}
            <div className="flex flex-col p-3 md:col-span-5 xl:col-span-7">
              <div className="m-3">
                <h2 class="text-4xl font-bold dark:text-blue-900">About</h2>
                <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300" />
                {/* <p class="text-gray-500 dark:text-gray-400"> I am currently a grad student studying Intelligent Systems, Robotics and Control at the University of California San Diego (UCSD). I am also a software engineer experienced in full-stack development, Machine Learning, and Robotics. More than anything else, I love challenging myself. I take pride in going a bit further everyday towards achieving my vision. Time after time, I have achieved personal goals that might otherwise seem impossible with creative planning and relentless execution.</p> */}
                <p class="text-lg font-serif text-black dark:text-black">
                  {" "}
                  I am a software engineer specializing in test automation,
                  full-stack web development, Machine Learning, and Robotics.
                  Equipped with a master’s degree, I have over 2 years of
                  professional experience and 4 internships in various software,
                  data, AI, and robotics roles. My passion for learning pushes
                  me to constantly improve my skills and knowledge. Through
                  innovative strategy and steadfast execution, I consistently
                  achieve what may seem unattainable, advancing my personal and
                  professional goals.
                </p>
              </div>
              <div className="m-3">
                <h2 class="text-4xl font-bold dark:text-blue-900">
                  Background
                </h2>
                <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300" />
                <p class="text-lg font-serif text-black dark:text-black">
                  {" "}
                  I majored in Electrical Engineering (Specializing in Machine
                  Learning and Control) at UCSD before transitioning into a MS
                  student through the BS/MS program, where I earned a Master’s
                  degree in Intelligent Systems, Robotics, and Control. Since
                  then, I have combined my domain knowledge from academia as
                  well as my curiosity for learning to tackle technical
                  problems, increase business value, and improve customer
                  experience. I continue to rapidly grow with a humble,
                  confident, and open-minded attitude.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div> HEY HEY HEY</div>;
  }
}
export default Topsection;
