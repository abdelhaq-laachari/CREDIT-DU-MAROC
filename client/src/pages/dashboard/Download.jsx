import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DownloadPdf from "../../components/PDF/DownloadPdf";

const Download = () => {
  return (
    <div>
      <PDFDownloadLink document={<DownloadPdf />} fileName="receipt">
        {({ loading, error }) =>
          loading ? "Loading document..." : "Download now"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Download;
