import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is ANY-2️⃣-ANY PDF Converter?",
    answer: "ANY-2️⃣-ANY is an online tool that allows you to convert, merge, split, and edit PDFs easily.",
  },
  {
    question: "Is the PDF conversion free to use?",
    answer: "Yes! Our basic tools are completely free, with no hidden charges.",
  },
  {
    question: "Is my uploaded file safe?",
    answer: "Yes! Your files are automatically deleted from our servers after processing to ensure privacy.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer: "Yes! You can upload multiple files and process them together for conversion.",
  },
  {
    question: "Do I need to install software to use this?",
    answer: "Nope! ANY-2️⃣-ANY is a web-based tool, and it works directly from your browser.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl w-full mx-auto p-6 bg-gray-500 rounded-2xl">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-100">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border text-gray-700 rounded-xl shadow-md bg-white overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-5 bg-gray-100 hover:bg-gray-200 transition-all duration-300"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                ▼
              </motion.span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden bg-white"
            >
              <div className="p-5 text-gray-700">{faq.answer}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
