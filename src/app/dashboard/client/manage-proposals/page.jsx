import { getProposalByClientId } from "@/lib/actions/proposals";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";
import ManageProposals from "@/Components/MainComponents/ClientSection/ManageProposals.jsx";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Manage Proposals - Client",
  description:
    "Manage and view proposals for your tasks on the SkillSwap platform.",
};
const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const id = session?.user?.id;
  const data = await getProposalByClientId(id, token);
  if (session?.user?.role !== "client") {
    redirect("/unauthorized");
  }
  if (session?.user?.userStatus === "blocked") {
    redirect("/access-blocked");
  }
  return (
    <div className="w-11/12 mx-auto my-5 min-h-screen">
      <h1 className="text-3xl font-bold mb-5">Manage Proposals</h1>
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Task Title</Table.Column>
              <Table.Column>Freelancer Name</Table.Column>
              <Table.Column>Estimate Budget</Table.Column>
              <Table.Column>Completion Date</Table.Column>
              <Table.Column>note</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {data?.length > 0 ? (
                data?.map((proposal) => (
                  <ManageProposals key={proposal._id} proposal={proposal} />
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={6} className="text-center">
                    No proposals found.
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default page;
