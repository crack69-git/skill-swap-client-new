import { Button, Separator } from "@heroui/react";

import Link from "next/link";

const BrowseTask = async ({ task }) => {
  const id = task._id;
  return (
    <div className="border bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg p-4">
      <p
        className={`font-semibold w-fit mb-3 px-5 rounded-3xl ${task.status === "Open" ? "bg-purple-200 dark:bg-purple-500" : task.status === "in-progress" ? "bg-blue-200 dark:bg-blue-500" : task.status === "completed" ? "bg-yellow-200 dark:bg-yellow-500" : "bg-green-200 dark:bg-green-500"}`}
      >
        {task.status}
      </p>
      <p className="text-xl font-semibold">{task.category}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-2xl font-bold">{task.TaskTitle}</p>
        <p className="font-semibold">
          Budget: $<span className="font-bold text-2xl">{task.budget}</span>
        </p>
      </div>
      <p className="text-gray-500 font-medium">
        Client: {task.clientName || "Unknown"}
      </p>
      <Separator className="my-3" />
      <div className="flex justify-between items-center mt-2">
        <p>Deadline: {task.deadline}</p>
        <div className={`flex gap-2 `}>
          <Link href={`/browse-tasks/${id}`}>
            <Button variant="primary" size="md" className="mt-2">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseTask;
