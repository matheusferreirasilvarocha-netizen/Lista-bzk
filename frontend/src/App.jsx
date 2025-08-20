<<<<<<< HEAD

import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import './App.css'
import { getItems, updatePlayerStatus } from "./api";

function App() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const players = await getItems();
      // console.log("Dados recebidos da API:", players); // Vimos que isso funciona!
      setStatus(players); // Armazena os jogadores completos no estado
    }
    fetchPlayers();
  }, []);

  async function updateStatus(id, jogar) {
    // Este log é crucial. Veja o que ele mostra APÓS o clique.
    // console.log("ID recebido no clique:", id); 
    
    // Se o ID ainda for undefined aqui, o erro SÓ PODE ESTAR na linha do onClick.
    if (!id) {
      console.error("ERRO: O ID do jogador não foi recebido! Verifique o onClick do botão.");
      return;
    }
    
    setStatus(prev => prev.map(s => (s._id === id ? { ...s, jogar } : s)));

    try {
      await updatePlayerStatus(id, jogar);
    } catch (error) {
      console.error("Erro ao atualizar na API:", error);
    }
  }

  const confirmados = status.filter(s => s.jogar === true).length;
  const recusados = status.filter(s => s.jogar === false).length;
  const pendentes = status.filter(s => s.jogar === null).length;



  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      {/* Painel de Contagem */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-gradient-to-r from-green-600 to-green-400 p-5 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-bold flex items-center justify-center gap-2"><CheckCircle /> Confirmados</h2>
          <p className="text-3xl font-extrabold">{confirmados}</p>
        </div>
        <div className="bg-gradient-to-r from-red-600 to-red-400 p-5 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-bold flex items-center justify-center gap-2"><XCircle /> Não vão</h2>
          <p className="text-3xl font-extrabold">{recusados}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 p-5 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-bold flex items-center justify-center gap-2"><Clock /> Pendentes</h2>
          <p className="text-3xl font-extrabold">{pendentes}</p>
        </div>
      </div>
      <div>
        {confirmados>= 5&& (
          <h1 className="text-3xl font-extrabold text-center text-lime-500 mb-8 tracking-wide">Lobby formado🥳🥳</h1>
        )}
      </div>
      <h1 className="text-3xl font-extrabold text-center mb-8 tracking-wide">
        🎮 QUEM VAI JOGAR HOJE?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {status.map(player => (
          <div
            // Use o _id único como key
            key={player._id}
            className="bg-[#1a1a1a] border border-yellow-500/40 rounded-2xl p-5 shadow-xl hover:shadow-yellow-500/20 transition"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{player.nome}</h2>
              <Clock className="text-yellow-400" />
            </div>

            <p className={`text-center py-2 mb-4 rounded-lg font-semibold ${
                player.jogar === null ? "bg-yellow-500/20 text-yellow-400"
                : player.jogar === true ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"}`}
            >
              {player.jogar === null ? "Pendente"
                : player.jogar === true ? "Confirmado"
                : "Não vai"}
            </p>

            <div className="flex gap-3">
              {/* O PONTO MAIS IMPORTANTE! VERIFIQUE SE O SEU ESTÁ IGUAL. */}
              <button
                onClick={() => updateStatus(player._id, true)}
                className="flex-1 bg-green-600 hover:bg-green-500 py-2 rounded-lg font-bold transition"
              >
                Vou
              </button>
              <button
                onClick={() => updateStatus(player._id, false)}
                className="flex-1 bg-red-600 hover:bg-red-500 py-2 rounded-lg font-bold transition"
              >
                Não vou
              </button>
            </div>
          </div>
        ))}
      </div>
=======
import { useEffect, useState } from "react";
import { getItems, updateItem, deleteItem } from "./api";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const data = await getItems();
    setItems(data);
  }

  async function toggleJogar(item) {
    await updateItem(item._id, !item.jogar); // troque _id por id se sua API usa id
    carregar();
  }

  async function remover(id) {
    await deleteItem(id);
    carregar();
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Lista de Itens</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <b>{item.nome}</b> - {item.jogar ? "Jogando 🎮" : "Parado ⏸️"}
            <button onClick={() => toggleJogar(item)}>Trocar</button>
            <button onClick={() => remover(item._id)}>Deletar</button>
          </li>
        ))}
      </ul>
>>>>>>> c61f231925e486ce475ff6182a901013005fecef
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> c61f231925e486ce475ff6182a901013005fecef
