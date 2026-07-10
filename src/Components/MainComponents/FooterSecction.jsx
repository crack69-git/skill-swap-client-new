import React from "react";
import { Separator } from "@heroui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
const FooterSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-11/12 mx-auto">
        <div className="flex max-sm:flex-col max-sm:items-center max-sm:justify-center items-end justify-between py-10">
          <div className="max-sm:mb-5">
            <p className="text-2xl font-bold">SkillSwap</p>
            <p className="w-11/12 text-gray-700 dark:text-gray-300 mt-2">
              The premium choice for professional freelancers and high-growth
              companies.
            </p>
          </div>
          <div className=" flex items-center gap-4">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
        <Separator className="my-4 bg-gray-300" />
        <div className="py-10 flex items-center justify-between">
          <div>© 2024 SkillSwap Marketplace</div>
          <div className="flex flex-wrap items-center gap-4">
            <FaXTwitter />
            <GrLinkedin />
            <FaFacebookSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
