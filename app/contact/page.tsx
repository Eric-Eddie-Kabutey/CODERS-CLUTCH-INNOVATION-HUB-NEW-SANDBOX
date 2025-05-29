import ContactInfoFormSection from "@/components/contact/ContactInfoFormSection";
import MapSection from "@/components/contact/MapSection";
import React from "react";

const ContactUS = () => {
  return (
    <div>
      {/* <MapWithControls /> */}
      <div className="h-24 w-full"></div>
      <MapSection />
      <ContactInfoFormSection />
    </div>
  );
};

export default ContactUS;
