// import {Link} from 'react-router-dom'
const Projectcard = (props) => {
    console.log(props.dat.title)
    const title = props.dat.title
    const desc = props.dat.desc
    const demolink = props.dat.demolink
    const link2 = props.dat.link2
    const code = props.dat.code
    const paper = props.dat.paper


    
    return (
        <div className="mx-auto w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 dark:bg-white dark:border-gray-600 dark:text-black">
            <section className="text-gray-800 text-center md:text-left">
                <div className="block shadow-lg bg-white">
                    <div className="flex flex-wrap items-center">
                        {/* <div className="grow-0 shrink-0 basis-auto block lg:flex w-full md:w-4/12">
                        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/097.jpg" alt="Trendy Pants and Shoes"
                            className="w-full " />
                        </div> */}
                        <div className="grow-0 shrink-0 basis-auto w-full md:w-full">
                        <div className="px-3 py-6 md:px-6">
                            <div className="flex flex-row">
                                <h2 className="text-3xl font-bold mb-3 mx-2">
                                <span className="text-red-600">"{title}"</span> project
                                </h2>
                                {
                                    demolink &&
                                    <a target="_blank" href={demolink}> 
                                        <button type="button"
                                        className="mb-3  mx-2 px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true" data-mdb-ripple-color="light">Demo</button>
                                    </a>
                                }
                                {
                                    link2 && 
                                    <a target="_blank" href={link2}> 
                                        <button type="button"
                                        className="mb-3  mx-2 px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true" data-mdb-ripple-color="light">Presentation</button>
                                    </a>
                                }
                                {
                                    code && 
                                    <a target="_blank" href={code}> 
                                        <button type="button"
                                        className="mb-3  mx-2 px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true" data-mdb-ripple-color="light">Code</button>
                                    </a>
                                }
                                {
                                    paper && 
                                    <a target="_blank" href={code}> 
                                        <button type="button"
                                        className="mb-3  mx-2 px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true" data-mdb-ripple-color="light">Paper</button>
                                    </a>
                                }
                            </div>
                            <p className="mx-4 text-gray-500 mb-3 ">
                            {desc}
                            </p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projectcard;