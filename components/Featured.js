import Carousel from "../components/Carousel"
import Card from "./Card";
function Featured() {

    const exp_text = {
        threed: {
            title:"Data Scientist Intern @3D Systems",
            date:"Jun 2022 - Sep 2022",
            work: [
                "Full-stack development of internal tools used by bioprinting R&D teams. ",
                "Met multiple Q3 OKRs by improved current ETL pipelines and the monitoring infrastructure across large-scale distributed backend components.",
                "Created a fleet-monitoring system for all 3D bioprinters. Team members reported saving 30 minutes a day of traversal time to the lab.",
                "Integrated an auto-focus prgoram into firmware for 3D bioprinters, removing risk of error from manual focus and reducing focusing time from 1 hour to 5 minutes."
            ],
            logo:"/imgs/companies/3ds_logo.png"
        },
        appt: {
            title:"AI Specialist @AppTech",
            date:"Jun 2021 - Sep 2021",
            work: [
                "Quantized deep learning models for deployment in edge TPU cameras, improving inference speed from 5fps to 30fps. Models include fall detection and people counting and TPU cameras benefit from being easily deployable in malls. ",
                "Trained a Face Detection + Facemask Classification model using ResNet18 and PyTorch, achieving a 91% F1 score. Then improved the inference speed by 4x using TensorRT running on an NVIDIA Jetson TX2.",
                "Developed a vision-based anti-smuggling algorithm that uses object detection models and heuristics. Model has 85% precision on test data and is to be deloyed at the Hong Kong international airport."
            ],
            logo:"/imgs/companies/appt.png"
        },
        risksis: {
            title:"Software Engineer @Risksis",
            date:"Mar 2021 - Jun 2021",
            work: [
                "Created Python pipelines to retrieve text from PDF documents, analyze them using Natural Language Processing and store retrieved data in a MongoDB and Elasticsearch database.",
                "Created a Vue and ASP.NET application that allows users to perform complex queries on the databases.",
            ],
            logo:"/imgs/companies/risksis_logo.png"
        },
        astri: {
            title:"Software Engineer @ASTRI",
            date:"Jun 2019 - Sep 2019",
            work: [
                "Developed an augmented reality application forthe Microsoft HoloLens with Unity (C#) which allows the userto spawn objects via hand gestures on top of AR tags, allowing one to digitally tourthe layout of our autonomous warehouse.",
            ],
            logo:"/imgs/companies/astri_logo2.jpeg"
        },
        arclab: {
            title:"Research Assistant @UCSD ARCLAB",
            date:"Jan 2022 - Jun 2022",
            work: [
                "Worked with CT/MR compatible needle insertion robotics under Prof Michael Yip and PhD student Dimitri Schreiber. ",
                "Performed data augmentation on DICOM images and training tumor and lung image segmentation using Tensorflow and MaskRCNN. ",
                "Created 3-D visualization pipelines during inference. ",
            ],
            logo:"/imgs/companies/arclab.png"
        },
    }

    return (
        <div className="block h-full">
            <div className="mx-0">
            <div>
                <div className="m-3">
                    <h2 class="text-4xl font-bold dark:text-blue-900">Featured Experience</h2>
                    <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>

                    
                    <div className="flex flex-row justify-between grid grid-cols-12 gap-2">
                        {/* <div className="flex flex-col p-3 col-span-4">
                            <Card picpath={"/imgs/companies/3ds_logo.png"}/>
                        </div>
                        <div className="flex flex-col p-3 col-span-4">
                            <Card picpath={"/imgs/companies/appt.png"}/>
                        </div>
                        <div className="flex flex-col p-3 col-span-4">
                            <Card picpath={"/imgs/companies/risksis_logo.png"}/>
                        </div>
                        <div className="flex flex-col p-3 col-span-4">
                            <Card picpath={"/imgs/companies/astri_logo2.jpeg"}/>
                        </div>
                        <div className="flex flex-col p-3 col-span-4">
                            <Card picpath={"/imgs/companies/arclab.png"}/>
                        </div> */}
                        { Object.keys(exp_text).map((item, i) => (
                                <div className="flex flex-row justify-center p-3 col-span-4">
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