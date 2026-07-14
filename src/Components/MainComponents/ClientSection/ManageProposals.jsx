"use client";
import { patchTaskProposalById } from "@/lib/actions/proposals";
import { Button, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const ManageProposals = ({ proposal }) => {
  const router = useRouter();
  const handleCheckout = (proposalId) => {
    console.log(`Accepting proposal with ID: ${proposalId}`);
  };
  const handleReject = async (proposalId, status) => {
    const res = await patchTaskProposalById(proposalId, { status: "rejected" });
    if (res) {
      alert("Proposal rejected successfully");
      router.refresh();
    } else {
      alert("Proposal rejected failed");
    }
  };
  return (
    <Table.Row>
      <Table.Cell>{proposal.taskTitle}</Table.Cell>
      <Table.Cell>{proposal.freelancerName}</Table.Cell>
      <Table.Cell>{proposal.bid}</Table.Cell>
      <Table.Cell>{proposal.estimateDeliveryDate}</Table.Cell>
      <Table.Cell>{proposal.note}</Table.Cell>
      <Table.Cell>
        {proposal.status === "rejected" ? (
          <p>Rejected</p>
        ) : proposal.status === "accepted" ? (
          <p>Accepted</p>
        ) : (
          <div className="flex flex-col justify-center items-center gap-2">
            <Button onClick={() => handleCheckout(proposal._id)}>Accept</Button>
            <Button onClick={() => handleReject(proposal._id, proposal.status)}>
              Reject
            </Button>
          </div>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default ManageProposals;
