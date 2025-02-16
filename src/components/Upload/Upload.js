import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

function Upload() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "model/stl": [".stl"] }, // Ensure only .stl files are accepted
    multiple: false, // Allow only one file at a time
  });

  return (
    <div className="container my-24 space-y-6 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Got a 3D Model? <span className="text-primary">Upload Here</span>
        </motion.h1>
      </div>

      {/* Drag and Drop Box */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-primary rounded-xl p-10 w-full max-w-lg text-center cursor-pointer hover:bg-gray-100 transition"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-darkGray">Drop the file here...</p>
        ) : (
          <p className="text-darkGray">Drag & Drop your .STL file here</p>
        )}
        <p className="text-sm text-gray-500">(Only .stl files are supported)</p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="w-full max-w-lg text-center mt-4">
          <h3 className="font-semibold text-lg">Selected File:</h3>
          <ul className="mt-2">
            {files.map((file, index) => (
              <li key={index} className="text-sm text-gray-700">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Upload Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primaryDark transition"
        onClick={() => console.log(files)}
      >
        Upload
      </motion.button>
    </div>
  );
}

export default Upload;
