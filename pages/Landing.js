
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
            {/* <div className="container mx-auto"> */}
            {/* <div className="lg:container lg:mx-auto"> */}
            {/* <div className="lg:container lg:mx-auto"> */}
            <div className="md:container md:mx-auto">
            {/* <div className=""> */}

            {/* <div className="flex flex-col justify-center"> */}
                {/* <div className="mx-3 md:mx-64"> */}
                {/* <div className="mx-3 md:mx-64"> */}
                <div className="mx-0 md:mx-3 xl:mx-16">
                {/* <div className="mx-3 lg:md-28 lg:mx-56 xl:mx-60 2xl:mx-64"> */}
                    <Topsection/>
                </div>
                {/* <div className="mx-3 md:mx-64 mt-16" id="experience"> */}
                <div className="mx-0 md:mx-3 xl:mx-16" id="experience">
                    <Featured/>
                </div>
                {/* <div className="mx-3 md:mx-64 mt-16" id="projects"> */}
                <div className="mx-0 md:mx-3 xl:mx-16" id="projects">
                    <Projects/>
                </div>
                {/* <div className="mx-3 md:mx-64 mt-16" id="courseskills"> */}
                <div className="mx-0 md:mx-3 xl:mx-16" id="courseskills">
                    <Courseskills/>
                </div>
                {/* <div className="mx-3 md:mx-64 mt-16" id="resume"> */}
                <div className="mx-0 md:mx-3 xl:mx-16" id="resume">
                    <Resume/>
                </div>
                {/* <div className="mx-3 md:mx-64 mt-16" id="contact"> */}
                <div className="mx-0 md:mx-3 xl:mx-16" id="contact">
                    <Contact/>
                </div>
            </div>
            </>

    )
}

