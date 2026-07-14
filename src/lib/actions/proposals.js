"use server";

export const postTaskProposal = async (proposalData) => {
  try {
    console.log("proposalData", proposalData);
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/postTaskProposal`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proposalData),
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting proposal:", error);
    throw new Error("Failed to submit proposal.");
  }
};

export const getTaskProposals = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/getTaskProposals`,
      {
        method: "GET",
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching task proposals:", error);
    throw new Error("Failed to fetch task proposals.");
  }
};

export const getTaskProposalsByEmail = async (email) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/getTaskProposalsByEmail/${email}`,
      {
        method: "GET",
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching task proposals by email:", error);
    throw new Error("Failed to fetch task proposals by email.");
  }
};
