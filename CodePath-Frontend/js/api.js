// js/api.js
const API_URL = "http://localhost:3000/api"; // ajuste se necessário

async function request(path, method = "GET", body = null, auth = true) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = localStorage.getItem("token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  });

  // tenta parsear JSON (algumas rotas podem não retornar JSON)
  const text = await res.text();
  try {
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) throw data || { error: res.statusText };
    return data;
  } catch (err) {
    // se já é objeto de erro
    if (err && err.error) throw err;
    // caso o response não seja JSON
    if (!res.ok) throw { error: res.statusText };
    return text;
  }
}
