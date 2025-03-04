import React, { useState } from "react";
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt } from "react-icons/fa";


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("pdf"); // Default format

  // Handle file selection (manual upload)
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Handle drag and drop

  const { getRootProps, getInputProps, isDragActive } = useDropzone();

  return (
    <>h</>
  );
};

export default FileUpload;
