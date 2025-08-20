import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jogadorRoutes from "./routes/JogadorRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

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
