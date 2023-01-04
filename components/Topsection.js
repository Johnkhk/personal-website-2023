// import Carousel from "../components/Carousel"
// import Carsel from "../components/Carsel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Topsection() {
    const images = ['/imgs/me/me_NY.png','/imgs/me/mepalmtrees.png', '/imgs/me/mesnowb.png', '/imgs/me/meTanky.jpg']
    
    // const isMobile = window.innerWidth <= 768;
    const isMobile = false;


    if (!isMobile) {

    return (
        <div className="block h-full">
            <div className="mx-0">
            <div className="md:grid md:grid-cols-10 md:gap-2 ">
                <div className=" md:flex md:flex-row md:justify-end md:p-3 md:col-span-4 md:h-full">
                    <div className="w-full md:p-3 md:w-9/12 md:h-full md:flex md:flex-row md:items-end">
                        <Carousel className="" showThumbs={false} interval={3000} autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false} dynamicHeight={false}>
                            <div>
                                <img src={images[0]} />
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
                <div className="flex flex-col p-3 col-span-6">
                    <div className="m-3">
                        <h2 class="text-4xl font-bold dark:text-blue-900">About</h2>
                        <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>
                        {/* <p class="text-gray-500 dark:text-gray-400"> I am currently a grad student studying Intelligent Systems, Robotics and Control at the University of California San Diego (UCSD). I am also a software engineer experienced in full-stack development, Machine Learning, and Robotics. More than anything else, I love challenging myself. I take pride in going a bit further everyday towards achieving my vision. Time after time, I have achieved personal goals that might otherwise seem impossible with creative planning and relentless execution.</p> */}
                        <p class="text-lg font-serif text-black dark:text-black"> I am a grad student and software engineer experienced in full-stack development, Machine Learning, and Robotics. More than anything else, I love challenging myself. I take pride in going a bit further everyday towards achieving my vision. Time after time, I have achieved personal goals that might otherwise seem impossible with creative planning and relentless execution.</p>

                    </div>
                    <div className="m-3">
                        <h2 class="text-4xl font-bold dark:text-blue-900">Background</h2>
                        <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>
                        <p class="text-lg font-serif text-black dark:text-black"> I majored in Electrical Engineering at UCSD before transitioning into a MS student through the BS/MS program. Since then, I have worked in effective teams to relentlessly tackle technical problems, increase business value, and improve customer experience. I continue to rapidly grow with a humble, confident, and open-minded attitude. </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )} else {
        return (
            <div> HEY HEY HEY</div>
        )
    }
}
export default Topsection;