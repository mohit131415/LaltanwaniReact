import React, { useState, useEffect } from 'react';
import {
  DialogContent,
  DialogDescription,
} from "./ui/dialog";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Button } from "./ui/button";
import lalpdf from "@/assets/pdf/cv.pdf";

const PDFViewer = ({ onClose }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleError = () => {
    setError("Failed to load PDF. Please try downloading it instead.");
  };

  return (
    <DialogContent className="max-w-4xl w-full h-[90vh] sm:h-[80vh]">
      <DialogDescription className="text-center mb-4">
        {isMobile ? "Download CV" : "View CV"}
      </DialogDescription>
      {isMobile ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="mb-4 text-center">For the best experience on mobile, please download the CV.</p>
          <Button asChild>
            <a href={lalpdf} download="Dr_Lal_Tanwani_CV.pdf">Download CV</a>
          </Button>
        </div>
      ) : (
        <div className="h-full">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
            <Viewer 
              fileUrl={lalpdf}
              onError={handleError}
            />
          </Worker>
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <div className="text-center">
                <p className="mb-4">{error}</p>
                <Button asChild>
                  <a href={lalpdf} download="Dr_Lal_Tanwani_CV.pdf">Download CV</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
      <Button onClick={onClose} className="mt-4">Close</Button>
    </DialogContent>
  );
};

export default PDFViewer;
