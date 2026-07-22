import { Button } from "@heroui/react";
import { Earth, FilePlus } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import heroimg from "@/assets/hero_img.webp";
const Herosection = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex items-center justify-between gap-10">
        <div>
          <p className="text-6xl font-bold mb-5 animate__animated animate__backInLeft animate__delay-0.5s">
            Get your tasks done by<br></br>
            <span className="text-blue-600"> skilled freelancers</span>
          </p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-10">
            Connect with expert talent for high-performance projects. From
            software development to creative design, SkillSwap empowers your
            workflow with professional precision.
          </p>
          <div className="flex gap-4">
            <Button
              variant="tertiary"
              size="large"
              className="p-6 border border-gray-300 animate__animated animate__bounceIn animate__faster"
            >
              <Link
                href="/dashboard/client/post-task"
                className="flex items-center gap-2"
              >
                {" "}
                <FilePlus />
                Post a Task
              </Link>
            </Button>
            <Button
              variant="primary"
              size="large"
              className="p-6 animate__animated animate__bounceIn animate__faster"
            >
              <Link href="/browse-tasks" className="flex items-center gap-2">
                <Earth />
                Browse Tasks
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <Image
            loading="lazy"
            src={heroimg}
            alt="Hero Image"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
