import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jogadorRoutes from "./routes/JogadorRoutes.js";
import cors from "cors";
dotenv.config();
import cron from "node-cron";
import Player from "./model/Jogador.js"; // ajuste o caminho conforme seu projeto

// Todo dia às 00:00 -> resetar jogar = false
cron.schedule("0 0 * * *", async () => {
  try {
    await Player.updateMany({}, { $set: { jogar: false } });
    console.log("Todos os jogadores foram resetados para jogar=false");
  } catch (err) {
    console.error("Erro ao resetar jogadores:", err);
  }
});

const app = express();
app.use(express.json());
app.use(cors())
console.log(process.env.MONGO_URI)
// Conexão MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado ao MongoDB Atlas"))
.catch((err) => console.error("❌ Erro na conexão:", err));

// Rotas
app.use("/jogadores", jogadorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
