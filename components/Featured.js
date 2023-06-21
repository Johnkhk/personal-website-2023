import Carousel from "../components/Carousel"
import Card from "./Card";
// import Cardbefore from "./Cardbefore";

function Featured() {

    const exp_text = {
        brainc: {
            title:"QA Software Engineer @Brain Corp",
            date:"Apr 2023 - Current",
            work: [
                "Currently focusing on our Gen2 Robot scrubbing/cleaning robots. ",
                "Leading the test suite optimization and automation pipeline for Gen2 Robot Scrubber regression. ",
                "Manual execution of test cases for big release cycles and hotfixes.",
                "Developing a comprehensive test plan encompassing various sensor disconnect scenarios, which will result in a reduction of 10% regression test cases.",
            ],
            logo:"/imgs/companies/braincorp-logo.svg",
            company_website:"https://braincorp.com/"
        },
        threed: {
            title:"Data Scientist @3D Systems",
            date:"Jun 2022 - Sep 2022",
            work: [
                "Full-stack development of internal tools used by bioprinting R&D teams. ",
                "Created a fleet-monitoring system for all 3D bioprinters. Team members reported saving 30 minutes a day of traversal time to the lab.",
                "Integrated an auto-focus prgoram into firmware for 3D bioprinters, removing risk of error from manual focus and reducing focusing time from 1 hour to 5 minutes.",
                "Met multiple Q3 OKRs by improving current ETL pipelines and monitoring infrastructure across large-scale distributed backend components.",
            ],
            logo:"/imgs/companies/3ds_logo.png",
            company_website:"https://www.3dsystems.com/"
        },
        appt: {
            title:"AI Specialist @AppTech",
            date:"Jun 2021 - Sep 2021",
            work: [
                "Quantized deep learning models for deployment in edge TPU cameras, improving inference speed from 5fps to 30fps. Models include fall detection and people counting and TPU cameras benefit from being easily deployable in malls. ",
                "Trained a Face Detection + Facemask Classification model using ResNet18 and PyTorch, achieving a 91% F1 score. Then improved the inference speed by 4x using TensorRT running on an NVIDIA Jetson TX2.",
                "Developed a vision-based anti-smuggling algorithm that uses object detection models and heuristics. Model has 85% precision on test data and is to be deloyed at the Hong Kong international airport."
            ],
            logo:"/imgs/companies/appt.png",
            company_website:"http://apptech.com.hk/"
        },
        risksis: {
            title:"Software Engineer @Risksis",
            date:"Mar 2021 - Jun 2021",
            work: [
                "Created Python pipelines to retrieve text from PDF documents, analyze them using Natural Language Processing and store retrieved data in a MongoDB and Elasticsearch database.",
                "Created a Vue and ASP.NET application that allows users to perform complex queries on the databases.",
            ],
            logo:"/imgs/companies/risksis_logo.png",
            company_website:"https://www.hkstp.org/our-community/directory/company-details/?company=risksis-technology-limited"
        },
        astri: {
            title:"Software Engineer @ASTRI",
            date:"Jun 2019 - Sep 2019",
            work: [
                "Developed an augmented reality application for the Microsoft HoloLens with Unity (C#) which allows the user to spawn objects via hand gestures on top of AR tags allowing one to digitally tour the layout of our autonomous warehouse.",
            ],
            logo:"/imgs/companies/astri_logo2.jpeg",
            company_website:"https://www.astri.org/"
        },
        arclab: {
            title:"Research Assistant @UCSD ARCLAB",
            date:"Jan 2022 - Jun 2022",
            work: [
                "Worked with CT/MR compatible needle insertion robotics under professor Michael Yip and PhD student Dimitri Schreiber. ",
                "Performed data augmentation on DICOM images for training tumor and lung image segmentation using Tensorflow and MaskRCNN. ",
                "Created 3-D visualization pipelines during inference. ",
            ],
            logo:"/imgs/companies/arclab.png",
            company_website:"https://www.ucsdarclab.com/"
        },
    }

    return (
        <div className="block h-full">
            <div className="mx-0">
            <div>
                <div className="m-3">
                    <h2 class="text-4xl font-bold dark:text-blue-900">Featured Experiences</h2>
                    <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>

                    
                    <div className="md:flex md:flex-row md:justify-between md:grid lg:grid lg:grid-cols-12 md:grid-cols-12 lg:gap-6 md:gap-6">

                        { Object.keys(exp_text).map((item, i) => (
                                <div key={exp_text[item].title} className="md:flex md:flex-row md:justify-center p-3  md:col-span-6 lg:col-span-4">
                                    <Card dat = {exp_text[item]}/>
                                </div>
                        ))}

                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}
export default Featured;