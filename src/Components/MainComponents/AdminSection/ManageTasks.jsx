"use client";
import { deleteTaskById, patchTaskById } from "@/lib/actions/tasks";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Bounce, toast } from "react-toastify";

const ManageTasks = ({ task }) => {
  const router = useRouter();

  const handleDeleteRequest = async (taskId) => {
    const { data: token, error } = await authClient.token();
    const res = await deleteTaskById(taskId, token.token);

    if (res.acknowledged) {
      toast.success("Task deleted successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.refresh();
    } else {
      toast.error("Failed to delete task", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <Table.Row>
      <Table.Cell>{task.TaskTitle}</Table.Cell>
      <Table.Cell>{task.clientName}</Table.Cell>
      <Table.Cell>{task.description}</Table.Cell>
      <Table.Cell>{task.state}</Table.Cell>
      <Table.Cell>${task.budget}</Table.Cell>
      <Table.Cell>
        <div className="flex flex-col items-center justify-center gap-2">
          <Modal>
            <Button variant="danger">Delete Task</Button>
            <Modal.Backdrop>
              <Modal.Container>
                <Modal.Dialog className="sm:max-w-[360px]">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Heading>Delete Task</Modal.Heading>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Are you sure you want to delete this task? This action
                      cannot be undone.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDeleteRequest(task._id)}
                    >
                      Delete Post
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </div>
      </Table.Cell>
    </Table.Row>
  );
};

export default ManageTasks;
