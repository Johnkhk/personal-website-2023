import Projectcard from "./Projectcard"
const Projects = () => {
    
    const project_data = [
        {
            title:"Fault Tolerant & Scalable SurfStore",
            pic:"bg-[url('/imgs/thumbnails/raft.png')]",
            desc: [
                "The Fault Tolerant and Scalable Surfstore project combines the Raft consensus algorithm for fault tolerance, availability, and consistency of the metadata service, along with consistent hashing on multiple blockstores for efficient load balancing and distribution of data in a distributed storage system.",
            ],
            demolink:"",
            link2:"",
            code:"https://github.com/Johnkhk/Fault-Tolerant-and-Scalable-SurfStore"
        },
        {
            title:"SurfStore (Drop Box Clone)",
            pic:"bg-[url('/imgs/thumbnails/surf_store_pic.png')]",
            desc: [
                "SurfStore is a blob cloud storage distrubted system service fully written in Go using gRPC. (Similar to Drop Box). It uses MetaStore to store metadata and a BlockStore to store blob data.",
            ],
            demolink:"",
            link2:"",
            code:"https://github.com/Johnkhk/Surf-Store"
        },
        {
            title:"CryptoTracker.fyi",
            pic:"bg-[url('/imgs/thumbnails/ct.png')]",
            desc: [
                "MERN stack (Mongo Express React Node) website that tracks Cryptocurrency prices and news. The site allows users to sign in and customize their dashboard of crypto currencies and has authenticated routes with JSON Web Tokens. It also keeps users logged in with session cookies. And stores passwords safely using bcrypt.",
            ],
            demolink:"https://www.cryptotracker.fyi/",
            link2:"",
            code:""
        },
        {
            title:"Text Summarizer",
            pic:"bg-[url('/imgs/thumbnails/ts.png')]",
            desc: [
                "Created a website that summarizes text using Natural Language Processing (NLP) with Django, SpaCy, and NextJS. Hosted on AWS Elastic Beanstalk and Vercel.",
            ],
            demolink:"https://www.cloudinference.app/summarizer",
            link2:"",
            code:""
        },
        {
            title:"Polar Coffee",
            pic:"bg-[url('/imgs/thumbnails/polarcollage.jpg')]",
            desc: [
                "With a team of 4, created an IoT Smart Iced Coffee Machine MVP product. Developed hardware and IoT features, and presented our business plan that won us best startup team project in a class of 200 students.",
            ],
            demolink:"https://youtu.be/dI5b3GKvunQ",
            link2:"https://www.youtube.com/watch?v=fviCBW3Zr4U&t=15s&ab_channel=JawnHo",
            code:"",
        },
        {
            title:"Particle Filter SLAM",
            pic:"bg-[url('/imgs/thumbnails/particle.png')]",
            desc: [
                "Implemented an efficient 2-D particle filter SLAM from scratch using lidar, wheel encoder and gyroscope data from a self-driving car. Also implemented texture mapping collected from stereo cameras. Wrote a paper describing the implementation.",
            ],
            demolink:"",
            link2:"",
            code:"https://github.com/Johnkhk/Particle-Filter-Slam-and-Texture-Mapping",
            paper:"https://github.com/Johnkhk/Particle-Filter-Slam-and-Texture-Mapping/blob/main/particle_filter_slam.pdf"
        },
        {
            title:"Extended Kalman Filter SLAM",
            pic:"bg-[url('/imgs/thumbnails/ekf.png')]",
            desc: [
                "Implemented an efficient Extended Kalman Filter (EKF) SLAM from scratch using IMU data, and Stereo Camera data from a self-driving car. ",
            ],
            demolink:"",
            link2:"",
            code:"https://github.com/Johnkhk/Extended-Kalman-Filter-SLAM",
            paper:"https://github.com/Johnkhk/Extended-Kalman-Filter-SLAM/blob/main/ece276a_pr3_EKF%20(3).pdf"
        },
        {
            title:"Galaxian with Haskell",
            pic:"bg-[url('/imgs/thumbnails/galaxian.png')]",
            desc: [
                "With a group of 4, recreated the famous 1979 arcade game Galaxian to be played in the terminal. Fully developed using functional programming language Haskell and the Brick library.",
            ],
            demolink:"",
            link2:"",
            code:"https://github.com/ashybot/cse230-galaxian",
            paper:""
        },
        {
            title:"Parallel Q-learning with CUDA",
            pic:"bg-[url('/imgs/thumbnails/cuda.png')]",
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
            pic:"bg-[url('/imgs/thumbnails/forge.png')]",
            desc: [
                "With a teammate, used techniques (convolution via FPGA verilog, GPU parralelization CUDA) to accelerate ML algorithms for forgery detection in media with hardware.",
            ],
            demolink:"",
            link2:"https://www.youtube.com/watch?v=gsOpZBwbeM0&t=26s&ab_channel=JawnHo",
            code:"",
            paper:"https://github.com/Johnkhk/personal-website-2023/blob/main/public/pdfs/ECE268_WI22_P7_KwokHungHo_JesusVillavazoFausto.pdf"
        },

    ]
    return (
        <>
            <div className="block">
                <div className="m-3">
                    <h2 class="text-4xl font-bold dark:text-blue-900">Projects</h2>
                    <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>
                    
                    {/* <div className="h-screen"> */}
                    {/* h-1/2 overflow-y-auto */}
                        <div className="  mt-8 bg-slate-100  shadow-md dark:bg-slate-100 border-b rounded-lg p-6 dark:border-slate-200 border border-slate-200">
                            <div className="md:h-5/6 overflow-y-auto border border-slate-200 flex flex-col">

                                    {project_data.map((dat) => (
                                        <Projectcard key={dat.title} dat = {dat}/>
                                    ))}
                                   
                            </div>
                        </div>
                    {/* </div> */}
                    
                </div>
            </div>

        </>
    )
}
export default Projects