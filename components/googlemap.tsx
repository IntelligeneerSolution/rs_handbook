import React from "react";

const GoogleMapComponent: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "450px", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.8644075576303!2d153.03734!3d-27.5977331!2m3!1f
        !2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91459feccb4591%3A0x389aa50eb89b2402!2su5%2F35%20Learoyd%20Rd%2C%
        20Acacia%20Ridge%20QLD%204110!5e0!3m2!1sen!2sau!4v1734501753834!5m2!1sen!2sau"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;
