import PostATaskPageSection from "@/Components/MainComponents/ClientSection/PostATaskSection";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

const PostATaskPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user?.role !== "client") {
    redirect("/unauthorize");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  return (
    <div className="w-11/12 mx-auto py-5">
      <div>
        <p>{process.env.BACKEND_URL}</p>
        <h2 className="text-4xl font-bold">Post A Task</h2>
        <p className="mb-10">
          This is the page where clients can post a new task.
        </p>
        <div>
          <PostATaskPageSection />
        </div>
      </div>
    </div>
  );
};

export default PostATaskPage;
