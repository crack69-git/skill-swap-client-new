"use server";

export const postTaskProposal = async (proposalData, token) => {
  try {
    console.log("proposalData", proposalData);
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/postTaskProposal`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
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

export const getTaskProposals = async (token) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/getTaskProposals`,
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
    console.error("Error fetching task proposals:", error);
    throw new Error("Failed to fetch task proposals.");
  }
};

export const getTaskProposalsByEmail = async (email, token) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/getTaskProposalsByEmail/${email}`,
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
    console.error("Error fetching task proposals by email:", error);
    throw new Error("Failed to fetch task proposals by email.");
  }
};

export const getProposalByClientId = async (id, token) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/getProposalByClientId/${id}`,
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
    console.error("Error fetching proposal by client ID:", error);
    throw new Error("Failed to fetch proposal by client ID.");
  }
};

export const patchTaskProposalById = async (proposalId, updatedData, token) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/patchTaskProposalById/${proposalId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error updating task proposal:", error);
    throw new Error("Failed to update task proposal.");
  }
};

export const getInPendingProposalByEmail = async (email, token) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/task/getInPendingProposalByEmail/${email}`,
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
    console.error("Error fetching in-pending proposals by email:", error);
    throw new Error("Failed to fetch in-pending proposals by email.");
  }
};
