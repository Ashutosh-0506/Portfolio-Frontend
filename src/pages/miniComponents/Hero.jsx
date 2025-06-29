import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-fmoh.onrender.com/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);

  // Helper function to validate URL
  const isValidLink = (url) => typeof url === "string" && url.trim() !== "";

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Online</p>
      </div>

      <h1 className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4">
        Hey, I'm Ashutosh
      </h1>

      <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]">
        <Typewriter
          words={[
            "MERN STACK DEVELOPER",
            "OPEN SOURCE CONTRIBUTOR",
            "PROBLEM SOLVER",
          ]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      {/* Social Icons */}
      <div className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 items-center mt-4 md:mt-8 lg:mt-10">
        <a
          href={isValidLink(user.instagramURL) ? user.instagramURL : "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!isValidLink(user.instagramURL)) e.preventDefault();
          }}
        >
          <Instagram
            className={`w-7 h-7 ${
              isValidLink(user.instagramURL)
                ? "text-pink-500"
                : "text-gray-400 cursor-not-allowed"
            }`}
          />
        </a>
        <a
          href={isValidLink(user.facebookURL) ? user.facebookURL : "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!isValidLink(user.facebookURL)) e.preventDefault();
          }}
        >
          <Facebook
            className={`w-7 h-7 ${
              isValidLink(user.facebookURL)
                ? "text-blue-800"
                : "text-gray-400 cursor-not-allowed"
            }`}
          />
        </a>
        <a
          href={isValidLink(user.linkedInURL) ? user.linkedInURL : "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!isValidLink(user.linkedInURL)) e.preventDefault();
          }}
        >
          <Linkedin
            className={`w-7 h-7 ${
              isValidLink(user.linkedInURL)
                ? "text-sky-500"
                : "text-gray-400 cursor-not-allowed"
            }`}
          />
        </a>
        <a
          href={isValidLink(user.twitterURL) ? user.twitterURL : "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!isValidLink(user.twitterURL)) e.preventDefault();
          }}
        >
          <Twitter
            className={`w-7 h-7 ${
              isValidLink(user.twitterURL)
                ? "text-blue-800"
                : "text-gray-400 cursor-not-allowed"
            }`}
          />
        </a>
      </div>

      {/* Github & Resume Buttons */}
      <div className="mt-4 md:mt-8 lg:mt-10 flex gap-3">
        <a
          href={isValidLink(user.githubURL) ? user.githubURL : "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!isValidLink(user.githubURL)) e.preventDefault();
          }}
        >
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <Github />
            <span>Github</span>
          </Button>
        </a>

        <a
          href={isValidLink(user?.resume?.url) ? user.resume.url : "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!isValidLink(user?.resume?.url)) e.preventDefault();
          }}
        >
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <ExternalLink />
            <span>Resume</span>
          </Button>
        </a>
      </div>

      <p className="mt-8 text-xl tracking-[2px]">{user?.aboutMe}</p>
      <hr className="my-8 md::my-10" />
    </div>
  );
};

export default Hero;
