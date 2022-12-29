import Projectcard from "./Projectcard"
const Projects = () => {
    
    const project_data = [
        {
            title:"CryptoTracker.fyi",
            pic:"",
            desc: [
                "MERN stack (Mongo Express React Node) website that tracks Cryptocurrency prices and news. Allows users to sign in and customize their dashboard. Has authenticated routes with JSON Web Tokens, and keeps users logged in with session cookies.",
            ],
            demolink:"https://www.cryptotracker.fyi/",
            link2:"",
            code:""


        },
        {
            title:"Text Summarizer",
            pic:"",
            desc: [
                "Created a website that summarizes text using Natural Language Processing (NLP) with Django, SpaCy, and NextJS. Hosted on AWS Elastic Beanstalk and Vercel.",
            ],
            demolink:"https://www.cloudinference.app/summarizer",
            link2:"",
            code:""
        },
        {
            title:"Polar Coffee",
            pic:"",
            desc: [
                "With a team of 4, created an IoT Smart Iced Coffee Machine MVP product. Developed hardware and IoT features, and presented our business plan that won us best startup team project in a class of 200 students.",
            ],
            demolink:"https://youtu.be/dI5b3GKvunQ",
            link2:"https://www.youtube.com/watch?v=fviCBW3Zr4U&t=15s&ab_channel=JawnHo",
            code:"",
        },
        {
            title:"Particle Filter SLAM",
            pic:"",
            desc: [
                "Implemented an efficient 2-D particle filter SLAM from scratch using lidar, wheel encoder and gyroscope data from a self-driving car. Also implemented texture mapping collected from stereo cameras. Wrote a paper describing the implementation.",
            ],
            demolink:"",
            link2:"",
            code:"https://github.com/Johnkhk/Particle-Filter-Slam-and-Texture-Mapping",
            paper:"https://github.com/Johnkhk/Particle-Filter-Slam-and-Texture-Mapping/blob/main/particle_filter_slam.pdf"
        },
        {
            title:"EKF SLAM",
            pic:"",
            desc: [
                "Implemented an efficient Extended Kalman Filter SLAM from scratch using IMU data, and Stereo Camera data from a self-driving car. ",
            ],
            demolink:"",
            link2:"",
            code:"https://github.com/Johnkhk/Extended-Kalman-Filter-SLAM",
            paper:"https://github.com/Johnkhk/Extended-Kalman-Filter-SLAM/blob/main/ece276a_pr3_EKF%20(3).pdf"
        },
        {
            title:"Galaxian with Haskell",
            pic:"",
            desc: [
                "With a group of 4, recreated the famous 1979 arcade game Galaxian to be played in the terminal using Haskell and the Brick library.",
            ],
            demolink:"",
            link2:"",
            code:"https://github.com/ashybot/cse230-galaxian",
            paper:""
        },
        {
            title:"Parallel Q-learning with CUDA",
            pic:"",
            desc: [
                "Implemented asynchronous multi-agent parallel reinforcement learning algorithms: Q-lambda and Q(0)-learning using C/C++ and CUDA. ",
            ],
            demolink:"https://www.youtube.com/watch?v=XxnJLYPveT4&ab_channel=JawnHo",
            link2:"https://www.youtube.com/watch?v=HJUQz3LXsNM&t=35s&ab_channel=JawnHo",
            code:"",
            paper:""
        },
        {
            title:"Hardware acc. of Forgery Detection",
            pic:"",
            desc: [
                "With a teammate, used techniques (convolution via FPGA verilog, GPU parralelization CUDA) to accelerate ML algorithms for forgery detection in media with hardware.",
            ],
            demolink:"",
            link2:"https://www.youtube.com/watch?v=gsOpZBwbeM0&t=26s&ab_channel=JawnHo",
            code:"",
            paper:""
        },

    ]
    return (
        <>
            <div className="block">
                <div className="m-3">
                    <h2 class="text-4xl font-bold dark:text-blue-900">Projects</h2>
                    <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                    <div className="bg-white  shadow-md dark:bg-white dark:border-gray-700 border border-gray-200">
                        {project_data.map((dat) => (
                            <Projectcard dat = {dat}/>
                        ))}
                        
                        {/* <Projectcard/>
                        <Projectcard/>
                        <Projectcard/> */}
                    </div>
                    
                </div>
            </div>

        </>
    )
}
export default Projects