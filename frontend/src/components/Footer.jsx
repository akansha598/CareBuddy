import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: "url('https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg')",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <div className="mb-0">
      <div style={BannerImg} className="text-white py-10 mb-0">
        <div className="container mx-auto">
          <div data-aos="zoom-in" className="grid md:grid-cols-3 gap-6">
            {/* Company details */}
            <div className="py-8 px-4">
              <p className="text-gray-200">
              Connecting families with trusted caregivers for peace of mind.
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Important Links</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Links</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <a href={link.link}>{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social links */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" className="text-3xl text-gray-200 hover:text-primary">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-3xl text-gray-200 hover:text-primary">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-3xl text-gray-200 hover:text-primary">
                    <FaLinkedin />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3 text-gray-200">
                    <FaLocationArrow />
                    <p>Noida, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;
