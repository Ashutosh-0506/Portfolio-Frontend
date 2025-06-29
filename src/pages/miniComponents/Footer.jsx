import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const bottomLinks = ["Privacy Policy", "Terms of Use", "Cookie Policy"];
  const socialLinks = {
    github: "https://github.com/Ashutosh-0506",
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-60b262251/",
    twitter: "#",
    facebook: "#"
  };

  return (
    <div className="bg-black text-white pt-10">
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-richblack-700 pb-8">
          <div className="w-full md:w-[40%]">
            <p className="text-richblack-400 text-sm">
              A full-stack portfolio built with passion, precision, and a
              purpose to help learners and developers. Crafted by Ashutosh Kumar.
            </p>
            <div className="flex gap-4 text-xl mt-4 text-richblack-400">
              <a href={socialLinks.github} target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer"><FaFacebook /></a>
            </div>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-richblack-50">Quick Links</h3>
              <ul className="flex flex-col gap-2 text-sm text-richblack-400">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-richblack-50">Resources</h3>
              <ul className="flex flex-col gap-2 text-sm text-richblack-400">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-richblack-400 py-5 border-t border-richblack-700">
          <div className="flex gap-3 flex-wrap text-center md:text-left">
            {bottomLinks.map((item, idx) => (
              <Link key={idx} to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-white">
                {item}
              </Link>
            ))}
          </div>
          <div className="mt-4 md:mt-0 text-center">
           Ashutosh © 2025 | Portfolio ®
          </div>
        </div>

        {/* Thank You Message */}
        <footer className="text-center mt-4">
          <hr className="border-richblack-700 mb-4" />
          <h1 className="text-tubeLight-effect text-3xl tracking-[8px]">
            Thanks For Visiting
          </h1>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
