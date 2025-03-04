// Svg's for the 
import merge from "../assets/merge.svg";
import split from "../assets/split.svg";
import compress from "../assets/compress.svg";
import reader from "../assets/reader.svg";
import word from "../assets/word.svg";
import jpg from "../assets/jpg.svg"; 

const tools = [
  { title: "IMG to PDF", description: "Convert Images to PDF.", icon: jpg },
  { title: "Word to PDF", description: "Convert PDF to DOCX.", icon: word },
  { title: "PDF to JPG", description: "Convert pdf pages into images", icon: compress },
  // { title: "Merge PDF", description: "Combine PDFs easily.", icon: merge },
  // { title: "PDF to Word", description: "Convert DOCX to PDF.", icon: reader },
  // { title: "Split PDF", description: "Separate PDF pages.", icon: split },
];

export default tools;