const express = require('express');
const cors = require('cors');
const axios = require('axios');  // Untuk request ke API eksternal
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Endpoint untuk pencarian berdasarkan nama tanaman
app.get('/api/search', async (req, res) => {
  const query = req.query.query;

  try {
    // Mengirim request ke Trefle.io API untuk mencari tanaman berdasarkan nama
    const response = await axios.get(`https://trefle.io/api/v1/plants/search?token=usr-Wg12CcnVrvH6gbaKaVes8tL7sv-T46aGytGd_l3rP5s&q=${query}`);
    res.json(response.data.data[0]); // Mengirimkan data tanaman pertama ke frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from Trefle.io API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
