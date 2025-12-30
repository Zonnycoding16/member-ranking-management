import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 1. Load config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middleware (Allows Frontend to talk to Backend)
app.use(cors());
app.use(express.json());

// 3. Test Routes (No Database needed)
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the backend! (No DB connected)", id: "1" });
});

// 4. Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});