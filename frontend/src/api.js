import axios from 'axios';
const API_BASE = 'http://127.0.0.1:8000';
export async function submitFootprint(userId, activity, emissions, evidenceUrl = '') {
  const res = await axios.post(`${API_BASE}/submit-footprint/`, { user_id: userId, activity, emissions, evidence_url: evidenceUrl });
  return res.data;
}
export async function getUserData(userId) {
  const res = await axios.get(`${API_BASE}/user/${userId}`);
  return res.data;
}