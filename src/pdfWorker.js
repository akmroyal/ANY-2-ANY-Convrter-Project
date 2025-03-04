import { GlobalWorkerOptions } from "pdfjs-dist/build/pdf";

// Load the worker from node_modules
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";

// Set worker source
GlobalWorkerOptions.workerSrc = pdfWorker;
