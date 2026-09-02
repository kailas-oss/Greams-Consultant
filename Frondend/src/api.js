// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8000",
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// // Welcome endpoint
// export async function fetchWelcome() {
//   try {
//     const response = await api.get('/Greams/');
//     return response.data;
//   } catch (error) {
//     console.error('Welcome API error:', error);
//     throw error;
//   } 
// }

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional but good practice
});

export default api;

// Welcome endpoint
export async function fetchWelcome() {
  try {
    const response = await api.get("/Greams/");
    return response.data;
  } catch (error) {
    console.error("Welcome API error:", error);
    throw error;
  }
}
