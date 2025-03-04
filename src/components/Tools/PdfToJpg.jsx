import React, { useState } from "react";
import { saveAs } from "file-saver";
import * as pdfjsLib from "pdfjs-dist";

// Import the custom worker setup
import "../../pdfWorker.js"; 

const PdfToJpg = () => {
    const [file, setFile] = useState(null);
    const [images, setImages] = useState([]);
    const [isConverting, setIsConverting] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const convertToJPG = async () => {
        if (!file) {
            alert("Please upload a PDF file first!");
            return;
        }

        setIsConverting(true);
        setImages([]);

        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = async () => {
            const pdfData = new Uint8Array(fileReader.result);
            const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

            const imagesArray = [];

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: 2 });
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await page.render({ canvasContext: context, viewport }).promise;

                canvas.toBlob((blob) => {
                    imagesArray.push(blob);
                    if (imagesArray.length === pdf.numPages) {
                        setImages(imagesArray);
                    }
                }, "image/jpeg");
            }
        };

        setIsConverting(false);
    };

    const downloadImage = (image, index) => {
        saveAs(image, `page-${index + 1}.jpg`);
    };

    return (
        <div className="py-6 px-10 flex flex-col items-centerflex items-center bg-gray-900 rounded-xl shadow-md lg:w-[70%] md:w-[40%] sm:w-full border-1 border-gray-400 gap-4">
            <h2 className="text-2xl font-base text-gray-300">Upload/Convert Your File</h2>
            <input type="file" accept=".pdf" onChange={handleFileChange} className="mb-4 border-1 p-28 border-gray-500 rounded-md text-2xl text-gray-400 cursor-pointer" />

            {file && (
                <div className="mt-4">
                    <h3 className="text-2xl font-base text-gray-200">Selected File:</h3>
                    <p className="text-gray-600">{file.name}</p>
                </div>
            )}

            <button
                onClick={convertToJPG}
                disabled={!file || isConverting}
                className={`mt-6 px-4 py-2 text-gray-100 font-base rounded-lg ${file ? "bg-indigo-600 hover:bg-indigo-500 cursor-pointer": "bg-gray-400 cursor-not-allowed"
                    }`}
            >
                {isConverting ? "Converting..." : "Convert to JPG"}
            </button>

            {images.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-2xl font-base text-gray-200">Converted Images:</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {images.map((image, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={URL.createObjectURL(image)} alt={`Page ${index + 1}`} className="w-48 h-auto border rounded-md" />
                                <button onClick={() => downloadImage(image, index)} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-xl cursor-pointer">
                                    Download Page {index + 1}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PdfToJpg;
