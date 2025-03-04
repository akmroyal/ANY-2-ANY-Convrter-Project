import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import { FaCloudUploadAlt } from "react-icons/fa";

const JpgToPdf = () => {
    const [images, setImages] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        setImages(acceptedFiles);
    }, []);

    const convertToPDF = async () => {
        if (images.length === 0){
            <p></p>
            return;
        } 

        const pdfDoc = await PDFDocument.create();

        for (const img of images) {
            const imageBytes = await img.arrayBuffer();
            let pdfImage;
            if (img.type === "image/jpeg" || img.type === "image/jpg") {
                pdfImage = await pdfDoc.embedJpg(imageBytes);
            } else if (img.type === "image/png") {
                pdfImage = await pdfDoc.embedPng(imageBytes);
            }

            const page = pdfDoc.addPage([pdfImage.width, pdfImage.height]);
            page.drawImage(pdfImage, {
                x: 0,
                y: 0,
                width: pdfImage.width,
                height: pdfImage.height,
            });
        }

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(blob, "converted-thx.pdf");
        setImages('');
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/jpeg, image/png" });

    return (
        <div className="py-6 px-10 flex flex-col items-centerflex items-center bg-gray-900 rounded-xl shadow-md lg:w-[70%] md:w-[40%] sm:w-full border-1 border-gray-400 gap-4">
            <h2 className="text-2xl font-base text-gray-300">Upload/Convert Your File</h2>
            <div
                {...getRootProps()}
                className="border-1 p-28 border-gray-500 rounded-md flex flex-col items-center"
            >
                <input {...getInputProps()} />
                <p className="text-xl text-gray-500 flex flex-col items-center">Drag and drop your file here
                    <span className="cursor-pointer flex items-center gap-1.5 text-gray-400 hover:underline">or click to upload <FaCloudUploadAlt /></span>
                </p>
            </div>

            {images.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-xl font-base text-gray-300">Uploaded Images:</h3>
                    <ul>
                        {images.map((file, index) => (
                            <li key={index} className="text-gray-500">{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
            <button
                onClick={convertToPDF}
                className="mt-6 px-4 py-2 bg-indigo-600 text-white font-base rounded-lg hover:bg-indigo-500 cursor-pointer text-xl"
            >
                Convert to PDF
            </button>
        </div>
    );
};

export default JpgToPdf;
