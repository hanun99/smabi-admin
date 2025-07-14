const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const dbConfig = {
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'smait_db'
};

// Alumni API endpoints
app.get('/api/alumni', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM alumni');
    await connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/alumni', async (req, res) => {
  try {
    const { nama, jurusan, jalur, universitas } = req.body;
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
      'INSERT INTO alumni (nama, jurusan, jalur, universitas) VALUES (?, ?, ?, ?)',
      [nama, jurusan, jalur, universitas]
    );
    await connection.end();
    res.json({ id: result.insertId, nama, jurusan, jalur, universitas });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});