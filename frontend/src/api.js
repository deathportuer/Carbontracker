import axios from 'axios';

// Production backend on Railway
const API_BASE = import.meta.env.VITE_API_BASE_URL 
  || "https://romantic-luck-production-c4a1.up.railway.app";

export async function submitFootprint(userId, activity, emissions, evidenceUrl = '') {
  const res = await axios.post(`${API_BASE}/submit-footprint/`, {
    user_id: userId,
    activity,
    emissions,
    evidence_url: evidenceUrl
  });
  return res.data;
}

export async function getUserData(userId) {
  const res = await axios.get(`${API_BASE}/user/${userId}`);
  return res.data;
}
