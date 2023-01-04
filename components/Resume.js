import React, { useState } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
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

    const [zoom, setzoom] = useState(1.0);

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

                    <div className='flex p-8 justify-center h-full bg-white'>
                        <Document file="/pdfs/Kwok Hung Ho Resume.pdf" className="border-8">
                            <Page 
                                pageNumber={1} 
                                scale={zoom}
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
export default Resume