import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import mammoth from "mammoth";

const WordToPdf = () => {
    const [file, setFile] = useState(null);
    const [textContent, setTextContent] = useState("");

    // Handle File Selection
    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            setFile(selectedFile);
            extractText(selectedFile);
        } else {
            alert("Please upload a valid .docx file");
        }
    };

    // Extract text from Word file
    const extractText = async (file) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = async (event) => {
            const arrayBuffer = event.target.result;
            const { value } = await mammoth.extractRawText({ arrayBuffer });
            setTextContent(value);
        };
    };

    // Convert extracted text to PDF
    const convertToPDF = async () => {
        if (!textContent) return;

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 800]);

        const fontSize = 12;
        const margin = 50;
        const textWidth = 500;
        const yStart = 750;

        let yPosition = yStart;
        const lines = textContent.split("\n");

        lines.forEach((line) => {
            if (yPosition < margin) {
                page.drawText("...", { x: margin, y: yPosition, size: fontSize, color: rgb(0, 0, 0) });
                return;
            }
            page.drawText(line, { x: margin, y: yPosition, size: fontSize, color: rgb(0, 0, 0) });
            yPosition -= 20;
        });

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(blob, `converted-new.pdf`);
    };

    return (
        <div className="py-6 px-10 flex flex-col items-centerflex items-center bg-gray-900 rounded-xl shadow-md lg:w-[70%] md:w-[40%] sm:w-full border-1 border-gray-400 gap-4">
            <h2 className="text-2xl font-base text-gray-300">Upload/Convert Your File</h2>
            <input type="file" accept=".docx" onChange={handleFileChange} className=" mb-4 border-1 p-28 border-gray-500 rounded-md text-2xl text-gray-400 cursor-pointer" />
            {file && (
                <div className="mt-4">
                    <h3 className="text-xl font-base text-gray-400">Selected File:</h3>
                    <p className="text-gray-300">{file.name}</p>
                </div>
            )}

            <button
                onClick={convertToPDF}
                disabled={!textContent}
                className={`mt-6 px-4 py-2 text-gray-100 text-xl font-base rounded-lg ${textContent ? "bg-indigo-600 hover:bg-indigo-500 cursor-pointer" : "bg-gray-400 cursor-not-allowed"
                    }`}
            >
                Convert to PDF
            </button>
        </div>
    );
};

export default WordToPdf;
