import { Table } from "@heroui/react";
import React from "react";

const FreelancerEarning = ({ payment }) => {
  return (
    <Table.Row>
      <Table.Cell>{payment.taskTitle}</Table.Cell>
      <Table.Cell>{payment.clientEmail}</Table.Cell>
      <Table.Cell>${payment.amount_received}</Table.Cell>

      <Table.Cell>{payment.deadline}</Table.Cell>
    </Table.Row>
  );
};

export default FreelancerEarning;
