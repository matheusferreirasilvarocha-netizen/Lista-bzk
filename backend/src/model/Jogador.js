import mongoose from "mongoose";

const JogadorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  jogar: { type: Boolean, default: false }
});

export default mongoose.model("Jogadores", JogadorSchema);