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


    //https://www.npmjs.com/package/react-pdf
    
    const pdf = "/pdfs/Kwok Hung Ho Resume.pdf"
    return (
        <>
            <div className="block">
                <div className="m-3">
                    <h2 class="text-4xl font-bold dark:text-blue-900">Resume</h2>
                    <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>

                    <div className='flex p-8 justify-center h-full bg-white'>
                        <Document file="/pdfs/Kwok Hung Ho Resume.pdf" className="border-8">
                            <Page pageNumber={1} />
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