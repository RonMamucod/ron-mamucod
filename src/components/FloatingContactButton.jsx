
import React from "react";
import { Contact, Download } from "lucide-react";

const FloatingContactButton = () => {
  const saveContact = () => {
    const contact = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "FN:Ron Mamucod",
  "N:Mamucod;Ron;;;",
  "TITLE:Web Developer & WordPress Specialist",
  "TEL;TYPE=CELL:+639617867924",
  "EMAIL;TYPE=INTERNET:mamucodron@gmail.com",
  "URL:https://github.com/RonMamucod",
  "URL:https://www.linkedin.com/in/ron-mamucod-150588282/",
  "END:VCARD",
].join("\r\n");

    const blob = new Blob([contact], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Ron-Mamucod.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  return (
    
<button
  type="button"
  onClick={saveContact}
  aria-label="Save Ron Mamucod's contact"
  className="fixed bottom-4 left-4 right-4 z-50 group flex items-center justify-between gap-4 rounded-full border border-primary/40 bg-background/90 px-5 py-3 text-foreground shadow-lg shadow-primary/10 backdrop-blur-xl transition-all duration-300 hover:border-primary hover:shadow-primary/30 sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto sm:min-w-[260px]"
>
  {/* Contact Icon */}
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-background">
    <Contact className="h-5 w-5" />
  </span>

  {/* Text */}
  <span className="flex flex-1 flex-col items-start">
    <span className="text-sm font-semibold whitespace-nowrap">
      Save My Contact
    </span>
    <span className="text-xs text-muted-foreground whitespace-nowrap">
      Add me to your contacts
    </span>
  </span>

  {/* Download Icon */}
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
    <Download className="h-5 w-5" />
  </span>
</button>

  );
};

export default FloatingContactButton;
