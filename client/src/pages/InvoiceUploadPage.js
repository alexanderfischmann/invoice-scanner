import React, { useState } from "react";
import "./InvoiceUploadPage.css";

function InvoiceUploadPage() {
  const [invoiceData] = useState({
    invoice_number: "—",
    invoice_date: "—",
    due_date: "—",
    po_number: "—",
    total_amount: "—",
  });

  return (
    <div className="page-container">
      <h1 className="title">Invoice Extractor</h1>

      <div className="upload-box">
        <p>Click to upload invoice PDF</p>
      </div>

      <button className="upload-button">Upload & Extract</button>

      <div className="output-card">
        <h2>Extracted Invoice Data</h2>

        <p><strong>Invoice Number:</strong> {invoiceData.invoice_number}</p>
        <p><strong>Invoice Date:</strong> {invoiceData.invoice_date}</p>
        <p><strong>Due Date:</strong> {invoiceData.due_date}</p>
        <p><strong>PO Number:</strong> {invoiceData.po_number}</p>
        <p><strong>Total Amount:</strong> {invoiceData.total_amount}</p>
      </div>
    </div>
  );
}

export default InvoiceUploadPage;