"use client";
import { getTaskProposals, postTaskProposal } from "@/lib/actions/proposals";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  DateField,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  Modal,
  TextArea,
  TextField,
} from "@heroui/react";
import { Rocket } from "lucide-react";
import React from "react";
import { GoFileSubmodule } from "react-icons/go";
import { Bounce, toast } from "react-toastify";

const ProposalForm = ({ data }) => {
  const variant = "blur";
  const { data: session } = authClient.useSession();
  console.log("data", data);
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const current = Object.fromEntries(formData.entries());
    const toady = new Date().toISOString().split("T")[0];
    console.log("toady", toady);
    console.log("current", current);

    const proposalData = {
      clientId: data.clientId,
      clientName: data.clientName,
      bid: current.bid,
      estimateDeliveryDate: current.date,
      currentDate: toady,
      note: current.note,
      freelancerName: session?.user?.name,
      taskId: data._id,
      taskTitle: data.TaskTitle,
      freelancerMail: session?.user?.email,
      status: "pending",
    };

    const proposal = await getTaskProposals();

    const exixts = proposal.find(
      (proposal) =>
        proposal.taskId === data._id &&
        proposal.freelancerMail === session?.user?.email,
    );

    if (exixts) {
      toast.error("You have already submitted a proposal for this task.", {
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

      return;
    } else {
      const { data: token, error } = await authClient.token();
      const response = await postTaskProposal(proposalData, token.token);

      if (response.acknowledged) {
        toast.success("Proposal submitted successfully!", {
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
        e.target.reset();
      } else {
        toast.error("Failed to submit proposal. Please try again.", {
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
    }
  };
  return (
    <div className={`border rounded-lg`}>
      <div className="bg-[#0F172A] rounded-lg p-4 text-white mb-4">
        <p className="font-bold text-xl">Submit Your Form</p>
        <p>Fill up the form to submit the form.</p>
      </div>
      <div className="p-4">
        {" "}
        <Form className="w-full max-w-96" onSubmit={onSubmit}>
          <Fieldset>
            <FieldGroup>
              <TextField isRequired name="bid" type="number">
                <Label>Bid</Label>
                <Input placeholder="$0.00" />
                <FieldError />
              </TextField>
              <DateField className="w-full" name="date">
                <Label>Estimate Delivery Date</Label>
                <DateField.Group>
                  <DateField.Input>
                    {(segment) => <DateField.Segment segment={segment} />}
                  </DateField.Input>
                </DateField.Group>
              </DateField>
              <TextField isRequired name="note">
                <Label>Note</Label>
                <TextArea placeholder="Leave client a note" />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Modal key={variant}>
                <Button variant="secondary" className="w-full">
                  <GoFileSubmodule className="mr-2" /> Submit Proposal
                </Button>

                <Modal.Backdrop variant={variant}>
                  <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                      <Modal.CloseTrigger />
                      <Modal.Header>
                        <Modal.Icon className="bg-default text-foreground">
                          <Rocket className="size-5" />
                        </Modal.Icon>
                        <Modal.Heading>
                          Submit Proposal Confirmation
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <p>Are you sure you want to submit this proposal?</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          onPress={() =>
                            document.getElementById("proposal-submit").click()
                          }
                          className="w-full"
                          slot="close"
                        >
                          Submit Proposal
                        </Button>
                      </Modal.Footer>
                    </Modal.Dialog>
                  </Modal.Container>
                </Modal.Backdrop>
              </Modal>
              <Button id="proposal-submit" type="submit" className="hidden" />
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
};

export default ProposalForm;
