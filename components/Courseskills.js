const Courseskills = () => {

    const gcourses = [
        {"ser":"ECE 271A: ", "title":"Statistical Learning I"},
        {"ser":"CSE 250A: ", "title":"Principles of Artificial Intelligence: Probabilistic Reasoning and Decision-Making"},
        {"ser":"ECE 253: ", "title":"Fundamentals of Digital Image Processing"},

        {"ser":"ECE 269: ", "title":"Linear Algebra and Application"},
        {"ser":"ECE 276A: ", "title":"Sensing and Estimation in Robotics"},
        {"ser":"ECE 268: ", "title":"Security of Hardware Embedded Systems"},

        {"ser":"ECE 276B: ", "title":"Planning and Learning in Robotics"},
        {"ser":"ECE 277: ", "title":"Convex Optimization and Applications"},
        {"ser":"ECE 272A: ", "title":"Stochastic Processes in Dynamic Systems I"},

        {"ser":"ECE 277: ", "title":"GPU Programming"},
        {"ser":"CSE 230: ", "title":"Principles of Programming Languages"},
        {"ser":"ECE 258: ", "title":"Recommender Systems and Web Mining"},
        
    ]
    const ucourses = [
        {"ser":"ECE 175A: ", "title":"Elements of Machine Intelligence: Pattern Recognition and Machine Learning"},
        {"ser":"ECE 174: ", "title":"Introduction to Linear and Nonlinear Optimization with Applications"},
        {"ser":"ECE 172A: ", "title":"Introduction to Intelligent Systems: Robotics and Machine Intelligence"},
        {"ser":"ECE 171A: ", "title":"Linear Control System Theory I"},
        {"ser":"ECE 171B: ", "title":"Linear Control System Theory II"},
        {"ser":"ECE 164: ", "title":"Analog Integrated Circuit Design"},
        {"ser":"ECE 144: ", "title":"LabVIEW Programming: Design and Applications"},
        {"ser":"ECE 140A: ", "title":"The Art of Product Engineering I"},
        {"ser":"ECE 140B: ", "title":"The Art of Product Engineering II"},
        {"ser":"ECE 109: ", "title":"Engineering Probability and Statistics"},
        {"ser":"ECE 107: ", "title":"Electromagnetism"},
        {"ser":"ECE 102: ", "title":"Introduction to Active Circuit Design"},
        {"ser":"ECE 101: ", "title":"Linear Systems Fundamentals"},
        {"ser":"ECE 100: ", "title":"Linear Electronic Systems"},
        {"ser":"ECE 65: ", "title":"Components and Circuits Laboratory"},
        {"ser":"ECE 45: ", "title":"Circuits and Systems"},
        {"ser":"ECE 35: ", "title":"Introduction to Analog Design"},
        {"ser":"ECE 30: ", "title":"Introduction to Computer Engineering"},
        {"ser":"ECE 25: ", "title":"Introduction to Digital Design"},
        {"ser":"ECE 17: ", "title":"Object-Oriented Programming: Design and Development with C++"},
        {"ser":"ECE 15: ", "title":"Engineering Computation"},
        {"ser":"CSE 11: ", "title":"Introduction to Programming and Computational Problem-Solving: Accelerated Pace"},
    ]
    const pskills1 = [
        "Python • C++ • JavaScript • MATLAB"
    ]
    const pskills2 = [
        "Java • C • C# • MySQL • Haskell • LabVIEW • CUDA • Verilog • ARM Assembly"
    ]
    const webdev = ["React • Node • Django • Angular • ASP.NET • Vue • REST APIs • GraphQL"]
    const toolsf = ["Git • Docker • Shell • CMake • PyTorch • TensorFlow • ROS • Pandas • NumPy • Grafana • Matplotlib"]
    const ml = ["Linear Algebra • Convex Optimization • SLAM • Deep Learning • Reinforcement Learning • Linear Regression • Logistic Regression • LASSO Regression • Gaussian Discriminant Regression • Expectation Maximization • Maximum Likelihood Estimation"]


    return (
            <>
            <div className="mt-6 h-full pb-6">
                <div className="m-3 flex w-full">
                    <div className="w-full">
                        <h2 class="text-4xl font-bold dark:text-blue-900">Courses</h2>
                        <hr class="w-11/12 my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>
                    </div>
                    <div className="w-full">
                        <h2 class="text-4xl font-bold dark:text-blue-900">Skills</h2>
                        <hr class="w-11/12 my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>
                    </div>
                </div>
                <div className="pt-0 flex flex-row justify-between grid grid-cols-12 gap-2">
                    <div className="flex flex-row justify-start p-3 col-span-6 h-fit">
                        <div class="flex justify-start">
                            <ul class="h-96 overflow-y-auto bg-white rounded-lg border border-gray-400 w-4/6 text-gray-900">
                                <li class="bg-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-400 w-full ">Graduate Courses</li>
                                {
                                    gcourses.map(dat => 
                                        <li class="hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"><span className="font-bold">{dat.ser}</span>{dat.title}</li>
                                    )
                                }
                                {/* <li class="hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">An item</li> */}
                                <li class="bg-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-400 w-full">Undergraduate Courses</li>
                                {
                                    ucourses.map(dat => 
                                        <li class="hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"><span className="font-bold">{dat.ser}</span>{dat.title}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-row justify-start p-3 col-span-6 h-fit">
                        <div class="flex justify-start">
                            <ul class="h-96 overflow-y-scroll bg-white rounded-lg border border-gray-400 w-4/6 text-gray-900">
                                <li class="bg-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-400 w-full ">Progamming Languages</li>
                                {
                                    pskills1.map(dat => 
                                        <li class="hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"><span className="font-bold">{"Strong: "}</span>{dat}</li>
                                    )
                                }
                                {
                                    pskills2.map(dat => 
                                        <li class="hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"><span className="font-bold">{"Familiar: "}</span>{dat}</li>
                                    )
                                }
                                {/* <li class="hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">An item</li> */}
                                <li class="bg-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-400 w-full">Web Development</li>
                                {
                                    webdev.map(dat => 
                                        <li class="hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">{dat}</li>
                                    )
                                }
                                <li class="bg-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-400 w-full">Tools & Frameworks</li>
                                {
                                    toolsf.map(dat => 
                                        <li class="hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">{dat}</li>
                                    )
                                }
                                <li class="bg-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-400 w-full">Math & Machine Learning & Artificial Intelligence</li>
                                {
                                    ml.map(dat => 
                                        <li class="hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">{dat}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>

    )
}

export default Courseskills