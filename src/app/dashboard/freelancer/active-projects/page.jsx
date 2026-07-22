import FreelancerActiveProposals from "@/Components/MainComponents/FreelancerSection/FreelancerActiveProposals";
import { getInPendingProposalByEmail } from "@/lib/actions/proposals";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const email = session?.user?.email;
  const data = await getInPendingProposalByEmail(email, token);

  return (
    <div className="w-11/12 mx-auto my-5 min-h-screen">
      <h1 className="text-3xl font-bold">Active Projects Page</h1>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 h-full">
        {data && data.length > 0 ? (
          data.map((proposal) => (
            <FreelancerActiveProposals key={proposal._id} proposal={proposal} />
          ))
        ) : (
          <p>No active projects found.</p>
        )}
      </div>
    </div>
  );
};

export default page;
