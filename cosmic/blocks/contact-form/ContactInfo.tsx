import React from "react";

const ContactInfo = () => {
  return (
      <div
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.8",
          color: "#333",
          marginTop:"8%",
          margin: "0 auto",
          maxWidth: "700px",
          textAlign: "left",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p>
          <strong>Email:</strong> charlie@intelligeneer.com
        </p>
        <p>
          <strong>Phone:</strong> 0416 576 066
        </p>
        <p>
          <strong>Address:</strong> U5/35 Learoyd Road Acacia Ridge QLD 4110
        </p>
      </div>
  );
};

export default ContactInfo;
