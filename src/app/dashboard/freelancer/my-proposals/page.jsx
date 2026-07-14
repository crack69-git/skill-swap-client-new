import MyProposalTable from "@/Components/MainComponents/FreelancerSection/MyProposalTable";
import { getTaskProposalsByEmail } from "@/lib/actions/proposals";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const email = session?.user?.email;
  console.log(email);
  const res = await getTaskProposalsByEmail(email);
  console.log(res);
  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="text-3xl font-bold mb-5">My Proposals</h1>
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Task Title</Table.Column>
              <Table.Column>Budget Bid</Table.Column>
              <Table.Column>Estimate Date</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Proposal Sent</Table.Column>
            </Table.Header>
            <Table.Body>
              {res.map((proposal) => (
                <MyProposalTable key={proposal._id} proposal={proposal} />
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default page;
