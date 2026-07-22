import React from "react";
import { Card } from "@heroui/react";
import { FaLock } from "react-icons/fa";
import Link from "next/link";

const UnauthorizedCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[320px] shadow-lg border border-gray-200">
        <div className="flex flex-col items-center text-center p-6">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <FaLock className="text-red-600 text-2xl" />
          </div>

          {/* Title */}
          <div className="text-xl font-semibold text-red-600 mb-2">
            Unauthorized
          </div>

          {/* Message */}
          <div className="text-gray-600 text-sm mb-4">
            You do not have permission to view this page.
          </div>

          {/* Button-like div */}
          <div className="w-full">
            <Link href="/">
              <div className="bg-red-600 text-white py-2 rounded-md font-medium cursor-pointer hover:bg-red-700 transition">
                Go Back
              </div>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UnauthorizedCard;
