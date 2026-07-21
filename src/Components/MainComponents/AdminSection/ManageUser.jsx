"use client";
import { Button, Modal, Table } from "@heroui/react";
import { Rocket } from "lucide-react";
import React from "react";

const ManageUser = ({ user }) => {
  const currentStatus = user?.userStatus || "unblocked";

  return (
    <Table.Row>
      <Table.Cell>{user?.name || "Unknown Name"}</Table.Cell>
      <Table.Cell>{user?.role || "user"}</Table.Cell>
      <Table.Cell>{user?.email || "No Email Provided"}</Table.Cell>
      <Table.Cell>
        {user?.role !== "admin" && (
          <Modal>
            <Button variant="secondary">
              {currentStatus === "unblocked" ? "Block User" : "Unblock User"}
            </Button>
            <Modal.Backdrop>
              <Modal.Container>
                <Modal.Dialog className="sm:max-w-[360px]">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Icon className="bg-default text-foreground">
                      <Rocket className="size-5" />
                    </Modal.Icon>
                    <Modal.Heading>
                      {currentStatus === "unblocked" ? "Block" : "Unblock"} User
                    </Modal.Heading>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Currently, this user is {currentStatus}. Are you sure you
                      want to{" "}
                      {currentStatus === "unblocked" ? "block" : "unblock"} this
                      user?
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    {/* <Button
                      size="sm"
                      onClick={() =>
                        handleUserStateChange(user._id, currentStatus)
                      }
                    >
                      {currentStatus === "unblocked"
                        ? "Block User"
                        : "Unblock User"}
                    </Button> */}
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default ManageUser;
