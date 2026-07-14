import { Table } from "@heroui/react";
import React from "react";

const MyProposalTable = ({ proposal }) => {
  return (
    <Table.Row>
      <Table.Cell>{proposal.taskTitle}</Table.Cell>
      <Table.Cell>${proposal.bid}</Table.Cell>
      <Table.Cell>{proposal.estimateDeliveryDate}</Table.Cell>
      <Table.Cell>{proposal.status}</Table.Cell>
      <Table.Cell>{proposal.currentDate}</Table.Cell>
    </Table.Row>
  );
};

export default MyProposalTable;
