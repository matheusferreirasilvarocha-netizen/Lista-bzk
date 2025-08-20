import express from "express";
import Jogador from "../model/Jogador.js";

const router = express.Router();

// Criar jogador
router.post("/", async (req, res) => {
  try {
    const jogador = new Jogador(req.body);
    const salvo = await jogador.save();
    res.json(salvo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar jogadores
router.get("/", async (req, res) => {
  try {
    const jogadores = await Jogador.find();
    res.json(jogadores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { jogar } = req.body;

    const atualizado = await Jogador.findByIdAndUpdate(
      req.params.id,
      { jogar }, // só altera esse campo
      { new: true } // retorna o documento atualizado
    );

    if (!atualizado) {
      return res.status(404).json({ error: "Jogador não encontrado" });
    }

    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Deletar jogador
router.delete("/:id", async (req, res) => {
  try {
    const deletado = await Jogador.findByIdAndDelete(req.params.id);

    if (!deletado) {
      return res.status(404).json({ error: "Jogador não encontrado" });
    }

    res.json({ message: "Jogador deletado com sucesso" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
