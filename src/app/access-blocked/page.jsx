import React from "react";
import { Card } from "@heroui/react";
import { FaBan } from "react-icons/fa";

const AccessBlockedPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-[340px] shadow-lg border border-gray-200">
        <div className="flex flex-col items-center text-center p-6">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <FaBan className="text-red-600 text-2xl" />
          </div>

          {/* Title */}
          <div className="text-xl font-semibold text-red-600 mb-2">
            Access Blocked
          </div>

          {/* Message */}
          <div className="text-gray-600 text-sm mb-4">
            Your account has been blocked. <br />
            Please contact customer service for more details.
          </div>

          {/* Button-like div */}
          <div className="w-full flex flex-col gap-2">
            <div className="bg-red-600 text-white py-2 rounded-md font-medium cursor-pointer hover:bg-red-700 transition">
              Contact Support
            </div>
            <p>or</p>
            <div className="bg-blue-600 text-white py-2 rounded-md font-medium cursor-pointer hover:bg-blue-700 transition">
              Go Back to Home
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AccessBlockedPage;
