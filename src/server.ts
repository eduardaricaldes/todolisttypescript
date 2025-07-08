import express from 'express';

const app = express();
const PORT = 3333;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API To Do List funcionando! 🚀');
});

app.listen(PORT, () => {
  console.log(`🚀 Server rodando em http://localhost:${PORT}`);
});
