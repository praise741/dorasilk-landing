import axios from "axios";

// Helper to get or create session ID
const getSessionId = () => {
    let sessionId = localStorage.getItem("dorasilk_session_id");
    if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem("dorasilk_session_id", sessionId);
    }
    return sessionId;
};

// Create an Axios instance
const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor to add session ID
client.interceptors.request.use((config) => {
    config.headers["x-session-id"] = getSessionId();
    return config;
});

// Response interceptor for error handling
client.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle specific error cases here (e.g., global error logging)
        console.error("API Error:", error.response?.data?.message || error.message);
        return Promise.reject(error);
    }
);

export default client;
