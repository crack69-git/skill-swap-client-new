import { Table } from "@heroui/react";
import React from "react";

const TransectionHistory = ({ payment }) => {
  return (
    <Table.Row>
      <Table.Cell>{payment.clientEmail}</Table.Cell>
      <Table.Cell>{payment.freelancerMail}</Table.Cell>
      <Table.Cell>${payment.amount_received}</Table.Cell>
      <Table.Cell>{payment.paymentDate}</Table.Cell>
      <Table.Cell>{payment.status}</Table.Cell>
    </Table.Row>
  );
};

export default TransectionHistory;
