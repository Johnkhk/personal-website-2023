import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// import useWindowDimensions from '../hooks/useWindowDimensions';
// import { Document, Page} from 'react-pdf';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

// import { PDFViewer } from '@react-pdf/renderer';

// import PDFViewer from 'pdf-viewer-reactjs'
// import PDFViewer from "tailwind-pdf-viewer/dist";
// import "tailwind-pdf-viewer/dist/style.css";

const Resume = () => {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

    // const { height, width } = useWindowDimensions();
    const { height, width } = useWindowDimensions2();
    // console.log("Aasdjasofhsaoifhaspof",width)
    

    let startingZoom=1.0;
    const [zoom, setzoom] = useState(startingZoom);

    //https://www.npmjs.com/package/react-pdf
    
    const pdf = "/pdfs/Kwok Hung Ho Resume.pdf"

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(pdf).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "Kwok Hung Ho Resume.pdf";
                alink.click();
            })
        })
    }
    const zoomin = () => {
        setzoom(zoom*1.2);
    }
    const zoomout = () => {
        setzoom(zoom/1.2);
    }

    return (
        <>
            <div className="block">
                <div className="m-3">
                    <div className='flex'>
                        <h2 className="text-4xl font-bold dark:text-blue-900">Resume</h2> 
                        <button onClick={onButtonClick} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download</button>
                    </div>
                    <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>


                    <div className='flex justify-center'>
                        <button onClick={zoomout} className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
                        <span className=' py-2'>{Math.floor(zoom*100)+"%"}</span>
                        <button onClick={zoomin} className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
                    </div>

                    <div className='container flex p-8 justify-center h-full bg-white'>
                        <Document file="/pdfs/Kwok Hung Ho Resume.pdf" className="border-8">
                            <Page 
                                pageNumber={1} 
                                scale={width<640 ? zoom/1.2/1.2/1.2: zoom}
                                // width={width*0.57}
                                // width={width*0.7}
                            />
                        </Document>
                        {/* <Document file="/pdfs/Kwok Hung Ho Resume.pdf" onLoadSuccess={onDocumentLoadSuccess} renderMode="svg">
                            <Page pageNumber={pageNumber} />
                        </Document> */}
                        
                        {/* <PDFViewer
                            document={{
                                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                            }}
                        />  */}
                        
                    </div>
                    
                </div>
            </div>

        </>
    )
}
export default Resume;

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}


function useWindowDimensions2() {
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0}) // <-- don't invoke here

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        handleResize() // <-- invoke this on component mount
        window.addEventListener('resize', handleResize)
        
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return windowDimensions
}