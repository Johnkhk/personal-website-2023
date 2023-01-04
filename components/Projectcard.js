// import {Link} from 'react-router-dom'
const Projectcard = (props) => {
    console.log(props.dat.title)
    const title = props.dat.title
    const desc = props.dat.desc
    const demolink = props.dat.demolink
    const link2 = props.dat.link2
    const code = props.dat.code
    const paper = props.dat.paper
    const pic = props.dat.pic
    // const pic = "bg-[url('/imgs/thumbnails/ct.png')]"



    const stra = 'https://mdbootstrap.com/img/new/ecommerce/vertical/097.jpg';
    const strb = "bg-[url('https://mdbootstrap.com/img/new/ecommerce/vertical/097.jpg')]"
    




    // const yes = "bg-wut bg-cover inline-block col-span-2 inline-block w-full h-full md:w-full md:h-full bg-lime-400 dark:bg-lime-400 top-0 right-0"
    // const yes = "bg-[url('https://mdbootstrap.com/img/new/ecommerce/vertical/097.jpg')] bg-cover inline-block col-span-2 inline-block w-full h-full md:w-full md:h-full bg-lime-400 dark:bg-lime-400 top-0 right-0"
    const yes = `border-r-2 border-slate-200 ${pic} bg-cover inline-block col-span-2 inline-block w-full h-full md:w-full md:h-full bg-lime-400 dark:bg-lime-400 top-0 right-0`


    
    return (
        <div className="mx-auto w-full text-sm font-medium text-gray-900 bg-white border-b last:border-b-0 border-gray-200 dark:bg-white dark:border-gray-200 dark:text-black">
            <section className="text-gray-800 text-center md:text-left">
                <div className="block shadow-lg bg-white hover:bg-gray-100 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">
                    <div className="flex flex-row items-center overflow-hidden relative">
                        {/* <div className="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-4/12">
                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/097.jpg" alt="Trendy Pants and Shoes"
                            className="w-full " />
                        </div> */}
                        {/* <div className="grow-0 shrink-0 basis-auto block w-96"> */}

                        <div className="grid grid-cols-12 gap-2 w-full">
                {/* <div className=" flex flex-row justify-end p-3 col-span-4 h-full"></div> */}

                {/* bg-[url('/img/hero-pattern.svg')] */}
                            {/* <div className="bg-wut bg-cover inline-block col-span-2 inline-block w-full h-full md:w-full md:h-full bg-lime-400 dark:bg-lime-400 top-0 right-0"> */}
                            <div className={yes}>


                            {/* <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/097.jpg" alt="Trendy Pants and Shoes" className="w-full object-contain" /> */}
                                {/* <div className="bg-black w-1/2 h-full">

                                </div> */}
                            </div>

                            {/* <div className="col-span-1">

                            </div> */}

                            {/* <div className="grow-0 shrink-0 basis-auto w-full md:w-full"> */}
                            <div className="col-span-10 w-full md:w-full">
                                <div className="px-3 py-6 md:px-6">
                                    <div className="flex flex-row">
                                        <h2 className="text-3xl font-bold mb-3 mx-2">
                                        {/* <span className="text-red-600">"{title}"</span> project */}
                                        <span className="text-blue-600">{title}</span> 

                                        </h2>
                                        {
                                            demolink &&
                                            <a target="_blank" href={demolink}> 
                                                <button type="button"
                                                className="mb-3  mx-2 px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                                data-mdb-ripple="true" data-mdb-ripple-color="light">Demo</button>
                                            </a>
                                        }
                                        {
                                            link2 && 
                                            <a target="_blank" href={link2}> 
                                                <button type="button"
                                                className="mb-3  mx-2 px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                                data-mdb-ripple="true" data-mdb-ripple-color="light">Presentation</button>
                                            </a>
                                        }
                                        {
                                            code && 
                                            <a target="_blank" href={code}> 
                                                <button type="button"
                                                className="mb-3  mx-2 px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                                data-mdb-ripple="true" data-mdb-ripple-color="light">Code</button>
                                            </a>
                                        }
                                        {
                                            paper && 
                                            <a target="_blank" href={code}> 
                                                <button type="button"
                                                className="mb-3  mx-2 px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                                data-mdb-ripple="true" data-mdb-ripple-color="light">Paper</button>
                                            </a>
                                        }
                                    </div>
                                    {/* <p className="mx-4 text-gray-500 mb-3 "> */}
                                    <p className="mx-4 text-black-500 mb-3 text-base">
                                    {desc}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projectcard;