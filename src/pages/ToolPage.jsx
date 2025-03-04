import React from "react";
import { useParams } from "react-router-dom";
import JpgToPdf from "../components/Tools/JpgToPdf";
import WordToPdf from "../components/Tools/WordToPdf";
import PdfToJpg from "../components/Tools/PdfToJpg";

const ToolPage = () => {
  const { toolName } = useParams(); // Get the dynamic route parameter
  console.log(toolName);

  let toolsRoute;
  if (toolName.includes("img")) {
    toolsRoute = <JpgToPdf />;
  } else if (toolName.includes("word")) {
    toolsRoute = <WordToPdf />;
  } else if (toolName.includes("jpg")) {
    console.log(toolName, " and ", toolName.includes("jpg"));
    toolsRoute = <PdfToJpg />
  } else {
    toolsRoute = <p>Sorry, this tool is not available.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-5xl my-4 font-semibold text-gray-700 capitalize">{toolName.replace("-", " ")}</h1>
      {toolsRoute}
      <a href="" className="cursor-pointer">
        <button className="mt-6 px-4 py-2 bg-indigo-600 cursor-pointer text-gray-200 text-2xl rounded-lg hover:bg-indigo-500">
          Reset/Again {toolName.replace("-", " ")}
        </button>
      </a>
    </div>
  );
};

export default ToolPage;
