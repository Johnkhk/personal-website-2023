const LinkToCompany = (link) => {
    // Navigate to the website when the div is clicked
    window.location.href = link;
};

const Card = (props) => {
    const picpath = props.dat.logo;
    const title = props.dat.title
    const date = props.dat.date
    const work = props.dat.work
    const company_website = props.dat.company_website
    // console.log(props.dat)
    return (
        // <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        //onClick={LinkToCompany(company_website)} 
        <div className="">
            <a href={company_website} target="_blank">
            <div className="hover:scale-105 transition-transform duration-300 bg-white shadow-2xl dark:bg-white dark:border-gray-300 border border-gray-200 rounded-lg overflow-hidden">
                <div className="w-full inline-block	">
                    <img className="w-full rounded-t-lg" src={picpath} alt="" />
                </div>
            <div className="w-full p-5 bg-slate-100 inline-block ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-rose-500 ">{props.dat.title}</h5>
                <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-blue-500 ">{props.dat.date}</h5>

                <div className="flex pb-3">
                    <ul className="w-full text-sm font-medium text-gray-900 bg-white rounded-lg overflow-hidden border border-gray-200 dark:border-gray-300 dark:bg-white dark:text-black">
                    {
                        work.map(bullet => 
                            <li key={bullet} className="font-rayqin text-lg py-2 px-4 w-full bg-stone-100 border-b last:border-b-0 border-gray-200 dark:border-gray-300"> 
                                {bullet}
                            </li>
                            )
                    }
                    </ul>
                </div>
                {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}


                {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> */}
            </div>
            </div>
            </a>
        </div>
    )
}
export default Card;