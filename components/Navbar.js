import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// import { Link } from "react-scroll"
// import Link from 'next/link';
import {Link} from 'react-scroll';

import Image from "next/image";
// import Logo from "../public/ML_logo.png";
import {useRef, useEffect} from 'react';
import { Button } from "react-scroll";

// import Scroll from 'react-scroll'
// const ScrollLink = Scroll.ScrollLink

function Navbar(props) {
	const [isOpen, setIsOpen] = useState(false);

	


	const navref = useRef()

	const scrollToTop = () => {
		// console.log("UGDIUSGDIUSDGSIU")
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		  });
	}
	return (
		// <div>
			<nav className=" sticky top-0 z-50 shadow-sm fixed-top w-full z-10 bg-slate-50">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 
								className=" font-semibold text-xl cursor-pointer text-red-400"
								onClick={scrollToTop}
								>
									{/* Stream<span className="text-blue-500">line</span> */}
									Kwok Hung <span className="font-extrabold "> Ho</span> (John)
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
								{/* <ScrollLink to="example-destination" > */}
									<Link
										to="experience" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Experience
									</Link>
									<Link
										// activeClass="Summarizer"
                                        // href="#experience"
										// to="summarizer"
										// onClick={scrollClick("#experience")}
										to="projects" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Projects
									</Link>
									<Link
										// activeClass="Summarizer"
                                        // href="#experience"
										// to="summarizer"
										// onClick={scrollClick("#experience")}
										to="courseskills" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
										// onClick={() => setIsOpen(false)}
									>
										Courses & Skills
									</Link>

									<Link
										// activeClass="Summarizer"
                                        // href="#experience"
										// to="summarizer"
										// onClick={scrollClick("#experience")}
										to="resume" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
									>
										Resume
									</Link>

									<Link
										
										to="contact" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
									>
										Contact
									</Link>
									
									{/* <Link
										activeClass="contact"
                                        href="https://johnkhk.github.io/portfolio"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
									>
										Contact
									</Link> */}
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-150 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-150 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								{/* <Link
									href="/summarizer"
									activeClass="Summarizer"
									to="Summarizer"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Summarizeropop
								</Link> */}
								<Link
										to="experience" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
										onClick={() => setIsOpen(!isOpen)}
									>
										Experience
									</Link>
									<Link
										// activeClass="Summarizer"
                                        // href="#experience"
										// to="summarizer"
										// onClick={scrollClick("#experience")}
										to="projects" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
										onClick={() => setIsOpen(!isOpen)}
									>
										Projects
									</Link>
									<Link
										// activeClass="Summarizer"
                                        // href="#experience"
										// to="summarizer"
										// onClick={scrollClick("#experience")}
										to="courseskills" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
										onClick={() => setIsOpen(!isOpen)}
									>
										Courses & Skills
									</Link>

									<Link
										// activeClass="Summarizer"
                                        // href="#experience"
										// to="summarizer"
										// onClick={scrollClick("#experience")}
										to="resume" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
										onClick={() => setIsOpen(!isOpen)}
									>
										Resume
									</Link>

									<Link
										
										to="contact" 
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
										onClick={() => setIsOpen(!isOpen)}
									>
										Contact
									</Link>
								
							</div>
						</div>
					)}
				</Transition>
			</nav>
		// </div>
	);
}

export default Navbar;