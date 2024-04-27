import axios from "axios";

export async function getCurrentUser() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");

    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching the user");
  }
}
