import { FaFacebook, FaLinkedin } from "react-icons/fa";

export const defaultFooterConfig = {
  companyName: "VORMIREX",
  description:
    "Making learning feel like playing. Your AI-powered education companion.",
  socialLinks: [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/profile.php?id=61584727210742",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/vormirex/",
    },
  ],
  sections: [
    {
      title: "Company",
      links: [
        { label: "Features", href: "/features" },
        { label: "Courses", href: "/courses" },
        { label: "Pricing", href: "/pricing" },
        { label: "About Us", href: "/about" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { label: "+91 8967838500", href: "tel:+918967838500" },
        { label: "info@vormirex.com", href: "mailto:info@vormirex.com" },
      ],
    },
  ],
  copyright: "© 2025 Vormirex. All rights reserved.",
};
