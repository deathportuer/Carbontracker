import axios from 'axios';

// Change this from localhost to your Railway backend URL
const API_BASE = "https://carbontraciter-production-ab22.up.railway.app";

export async function submitFootprint(userId, activity, emissions, evident) {
  const res = await axios.post(`${API_BASE}/submit-footprint`, {
    userId,
    activity,
    emissions,
    evident
  });
  return res.data;
}

export async function getUserData(userId) {
  const res = await axios.get(`${API_BASE}/user/${userId}`);
  return res.data;
}
