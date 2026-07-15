import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getTaskById } from "@/lib/actions/tasks";
import MyTasksCard from "@/Components/MainComponents/ClientSection/MyTasksCard";
const MyTaskPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const id = session?.user?.id;
  console.log("User ID in MyTaskPage:", id);

  const res = await getTaskById(id);
  console.log("Tasks fetched for user:", res);

  if (session?.user?.role !== "client") {
    redirect("/unauthorize");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  return (
    <div className="mt-5 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold">My Tasks</h2>
      <p>This is the page where clients can view their tasks.</p>
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
        {res.length > 0 ? (
          res.map((tasks, index) => <MyTasksCard key={index} tasks={tasks} />)
        ) : (
          <p className="text-center text-lg font-semibold text-gray-500 ">
            No tasks found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyTaskPage;
