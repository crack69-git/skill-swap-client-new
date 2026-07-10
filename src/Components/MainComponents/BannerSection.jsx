import { Button } from "@heroui/react";
import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
const BannerSection = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto mb-10 bg-sky-900 text-white rounded-3xl py-20 px-10 flex items-center justify-between gap-10">
        <div>
          <p className="text-5xl font-bold mb-4">
            Ready to transform<br></br> your workflow?
          </p>
          <p className="text-lg font-medium text-gray-200 mb-3 w-3/4 max-sm:w-full">
            Join the elite marketplace where quality meets speed. Hire the top
            1% of freelance talent or find your next high-paying gig today.
          </p>
          <div className="flex max-sm:flex-wrap gap-3 mt-5">
            <Button
              variant="primary"
              size="large"
              className="p-6 bg-white text-black rounded-2xl max-sm:w-full"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="large"
              className="p-6 rounded-2xl border border-white text-white font-bold max-sm:w-full"
            >
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
        <div>
          <div className=" flex  items-center gap-5 max-[827px]:hidden">
            <p className="relative -top-5 flex flex-col items-center gap-2 text-2xl font-medium bg-[#ad8cf3] rounded-2xl p-8">
              <IoShieldCheckmark className="text-green-300 text-6xl" />
              Secure
            </p>
            <p className="relative top-5 flex flex-col items-center gap-2 text-2xl font-medium bg-[#ad8cf3] rounded-2xl p-8">
              <RiCustomerService2Line className="text-green-300 text-6xl" />
              24/7 Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
