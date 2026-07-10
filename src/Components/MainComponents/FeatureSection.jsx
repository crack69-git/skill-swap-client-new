import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureSection = () => {
  return (
    <div className="my-10 w-11/12 mx-auto">
      <h3 className="text-4xl max-sm:text-2xl font-bold ">
        Latest Feature Tasks
      </h3>
      <div className="flex justify-between items-center">
        <p>High-priority projects looking for immediate expert attention.</p>
        <Link href="/browse-tasks" className="flex items-center gap-2">
          <p className="flex items-center gap-2 hover:text-blue-600 font-medium cursor-pointer">
            View All
            <FaArrowRightLong />
          </p>
        </Link>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {data.length > 0 ? (
          data.map((task) => <OpenTask key={task._id} task={task} />)
        ) : (
          <div className="text-gray-500 text-center col-span-full flex flex-col items-center justify-center my-10">
            <p>No feature tasks available at the moment.</p>
            <Link
              href="/dashboard/client/post-task"
              className="flex items-center gap-2"
            >
              <Button variant="primary" size="small" className="ml-2 mt-3">
                <FaPlus />
                Post a Task
              </Button>
            </Link>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default FeatureSection;
