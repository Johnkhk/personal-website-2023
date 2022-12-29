
import Topsection from "../components/Topsection"
import Featured from "../components/Featured"
import Projects from "../components/Projects"
export default function Landing() {
    return (
            <>
            <div>
                <div className="mx-8">
                    <Topsection/>
                </div>
                <div className="mx-16">
                    <Featured/>
                </div>
                <div className="mx-16">
                    <Projects/>
                </div>
            </div>
            </>

    )
}


