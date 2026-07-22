"use client";
import { patchTaskProposalById } from "@/lib/actions/proposals";
import { authClient } from "@/lib/auth-client";
import { Button, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const ManageProposals = ({ proposal }) => {
  const router = useRouter();
  const handleCheckout = async (proposalId) => {
    const { data: token, error } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          proposalId,
        }),
      },
    );
    const data = await res.json();

    window.location.href = data.url;
  };
  const handleReject = async (proposalId, status) => {
    const { data: token, error } = await authClient.token();
    const res = await patchTaskProposalById(
      proposalId,
      { status: "rejected" },
      token.token,
    );
    if (res) {
      toast.success("Proposal rejected successfully");
      router.refresh();
    } else {
      toast.error("Proposal rejected failed");
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
