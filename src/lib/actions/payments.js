"use server";

export const postTaskPayment = async (paymentData) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/postTaskPayment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting payment:", error);
    throw new Error("Failed to submit payment.");
  }
};
