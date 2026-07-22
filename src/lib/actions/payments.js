"use server";

export const postTaskPayment = async (paymentData, token) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/postTaskPayment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
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

export const getFreelancerPaymentByEmail = async (email, token) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/getFreelancerPaymentByEmail/${email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching freelancer payments:", error);
    throw new Error("Failed to fetch freelancer payments.");
  }
};

export const getAllPayments = async (token) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/task/getAllPayments/admin`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const result = await response.json();
  return result;
};
