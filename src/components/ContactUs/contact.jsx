import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

const ContactPage = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      subtitle: "Reach out to us",
      content: "official@acesmitadt.com",
      link: "mailto:official@acesmitadt.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      subtitle: "Mon-Fri from 9am to 5pm",
      content: ["Aayush: +91 92267 50350", "Shivam: +91 90652 61815"],
      link: ["tel:+919226750350", "tel:+919065261815"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      subtitle: "Come say hello",
      content: "MIT ADT University, Pune",
      link: "https://maps.app.goo.gl/c2sREVojqRdyiQon8",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/acesmitadt",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      link: "https://www.instagram.com/aces_mitadt",
      color: "hover:bg-pink-600",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      link: "https://www.facebook.com/acesmitadt",
      color: "hover:bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Touch
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black border border-gray-800/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-purple-600/10 rounded-full group-hover:bg-purple-600/20 transition-all duration-300">
                  <div className="text-purple-400">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
                {Array.isArray(item.content) ? (
                  <div className="space-y-2">
                    {item.content.map((phone, idx) => (
                      <a
                        key={idx}
                        href={item.link[idx]}
                        className="block text-purple-400 hover:text-purple-300 transition-colors font-medium"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    {item.content}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Connect With Us
            </h2>
            <p className="text-gray-400">Follow us on social media for updates and insights</p>
          </div>

          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-gray-900/50 border border-gray-800/50 rounded-2xl transition-all duration-300 hover:scale-110 hover:border-purple-500/50 ${social.color}`}
                title={social.name}
              >
                <div className="text-white group-hover:text-white transition-colors">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Join our community and be part of something amazing
            </p>
            <a
              href="mailto:official@acesmitadt.com"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Send us an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
