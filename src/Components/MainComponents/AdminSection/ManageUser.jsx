"use client";
import { patchUserInfoById } from "@/lib/actions/users";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, Table } from "@heroui/react";
import { Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const ManageUser = ({ user }) => {
  const router = useRouter();
  const currentStatus = user?.userStatus || "unblocked";

  const handleUserStateChange = async (userId, status) => {
    const { data: token, error } = await authClient.token();

    const newStatus = status === "unblocked" ? "blocked" : "unblocked";
    const res = await patchUserInfoById(
      userId,
      { userStatus: newStatus },
      token.token,
    );

    if (res.acknowledged) {
      toast.success(`User has been ${newStatus}`);
      router.refresh();
    } else {
      toast.error("Failed to update user status");
    }
  };

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
                    <Button
                      size="sm"
                      onClick={() =>
                        handleUserStateChange(user._id, currentStatus)
                      }
                    >
                      {currentStatus === "unblocked"
                        ? "Block User"
                        : "Unblock User"}
                    </Button>
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
