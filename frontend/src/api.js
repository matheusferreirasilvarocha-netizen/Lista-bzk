<<<<<<< HEAD
const API_URL = "https://lista-bzk.onrender.com"; // troque pela URL do Render

export async function getItems() {
  const res = await fetch(`${API_URL}/jogadores`);
  return res.json();
}

export async function updateItem(id, jogar) {
  const res = await fetch(`${API_URL}/jogadores/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jogar }),
  });
  return res.json();
}

export async function deleteItem(id) {
  const res = await fetch(`${API_URL}/jogadores/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function updatePlayerStatus(id, jogar) {
  await fetch(`https://lista-bzk.onrender.com/jogadores/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jogar }),
  });
}
=======
const API_URL = "https://lista-bzk.onrender.com"; // troque pela URL do Render

export async function getItems() {
  const res = await fetch(`${API_URL}/jogadores`);
  return res.json();
}

export async function updateItem(id, jogar) {
  const res = await fetch(`${API_URL}/jogadores/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jogar }),
  });
  return res.json();
}

export async function deleteItem(id) {
  const res = await fetch(`${API_URL}/jogadores/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
>>>>>>> c61f231925e486ce475ff6182a901013005fecef
