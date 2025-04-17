import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/Student-Portal", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Student-Portal');
    res.json(result.rows); 
    console.log(result.rows);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(8081, () => {
  console.log(" App is listening on port 8081");
});
