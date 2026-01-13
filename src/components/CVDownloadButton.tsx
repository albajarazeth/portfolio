import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import cvPdf from '../assets/alba-garza-2026-cv.pdf';

const CVDownloadButton = () => {
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'alba-garza-2026-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="gradient-button px-10 py-4 text-sm font-bold uppercase tracking-wide flex items-center gap-2 justify-center cursor-pointer"
      style={{ letterSpacing: '0.05em' }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <FiDownload className="w-4 h-4" />
      Download CV
    </motion.button>
  );
};

export default CVDownloadButton;
