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
    </div>
  );
}

export default App;
