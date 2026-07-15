import { redirect } from "next/navigation";
import { stripe } from "../../lib/stripe";
// import { createPayment, patchTaskStatus } from "@/lib/actions/payments";
// import { patchProposal } from "@/lib/actions/tasks";
import { Button, Card } from "@heroui/react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";
import { postTaskPayment } from "@/lib/actions/payments";
import { patchTaskProposalById } from "@/lib/actions/proposals";
import { patchTaskById } from "@/lib/actions/tasks";
// import { getToken } from "@/lib/actions/tokenGet";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["payment_intent"],
  });

  const { status, metadata, customer_details } = session;
  const customerEmail = customer_details?.email;

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    const paymentNow = {
      paymentIntentId: session.payment_intent.id,
      amount_received: session.payment_intent.amount_received / 100,
      currency: session.payment_intent.currency,
      status: session.payment_intent.status,
      clientEmail: customerEmail,
      clientId: metadata.clientId,
      freelancerMail: metadata.freelancerMail,
      taskId: metadata.taskId,
      taskTitle: metadata.taskTitle,
      proposalId: metadata.proposalId,
      paymentDate: new Date(),
      deadline: metadata.deadline,
    };
    console.log(paymentNow);
    const paymentResponse = await postTaskPayment(paymentNow);

    console.log("Payment response:", paymentResponse);

    if (paymentResponse.success) {
      const res1 = await patchTaskProposalById(metadata.proposalId, {
        status: "accepted",
      });

      const res2 = await patchTaskById(metadata.taskId, {
        status: "in-progress",
      });
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-default-50 px-4 my-10">
        <Card className="w-full max-w-md border shadow-xl">
          <div className="flex flex-col items-center gap-6 px-8 py-10 text-center">
            {/* Success Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-14 w-14 text-success" />
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl font-bold">Payment Successful!</h1>
              <p className="mt-2 text-default-500">
                Your payment has been completed successfully. Thank you for
                choosing our service.
              </p>
            </div>

            {/* Info Box */}
            <div className="w-full rounded-xl bg-default-100 p-4">
              <p className="text-sm text-default-600"></p>
            </div>

            {/* Button */}
            <Link href="/" className="w-full">
              <Button color="success" size="lg" className="w-full">
                <RiArrowGoBackFill className="mr-2" />
                Go to Homepage
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }
}
