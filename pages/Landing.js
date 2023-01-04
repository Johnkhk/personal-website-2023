
import Topsection from "../components/Topsection"
import Featured from "../components/Featured"
import Projects from "../components/Projects"
import Courseskills from "../components/Courseskills"
import Resume from "../components/Resume"
import Contact from "../components/Contact"


// import { Element } from 'react-scroll'
import React from "react"
export default function Landing() {
// export default React.forwardRef((props, ref) => { 

    // const { ref1, ref2, ref3 } = ref;
    return (
            <>
            <div className="">
                <div className="mx-3 md:mx-64">
                    <Topsection/>
                </div>
                <div className="mx-3 md:mx-64 mt-16" id="experience">
                    <Featured/>
                </div>
                <div className="mx-3 md:mx-64 mt-16" id="projects">
                    <Projects/>
                </div>
                <div className="mx-3 md:mx-64 mt-16" id="courseskills">
                    <Courseskills/>
                </div>
                <div className="mx-3 md:mx-64 mt-16" id="resume">
                    <Resume/>
                </div>
                <div className="mx-3 md:mx-64 mt-16" id="contact">
                    <Contact/>
                </div>
            </div>
            </>

    )
}


