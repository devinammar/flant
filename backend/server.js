//ini isinya cuma pengambilan data dari API untuk kedua fitur (search dan search by image)

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const multer = require('multer'); // buat handle upload file
const FormData = require('form-data');
const upload = multer();
const app = express();
const PORT = 5000;

app.use(cors());
// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "https://flant.vercel.app"
//   ]
// }));
app.use(express.json());

// utk fitur search
app.get('/api/search', async (req, res) => {
  const query = req.query.query;
  try {
    const response = await axios.get(`https://trefle.io/api/v1/plants/search?token=usr-Wg12CcnVrvH6gbaKaVes8tL7sv-T46aGytGd_l3rP5s&q=${query}`);
    res.json(response.data.data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from Trefle.io API' });
  }
});

// utk fitur search by image
app.post('/api/searchbyimage', upload.single('image'), async (req, res) => {
  try {
    const form = new FormData();
    form.append('images', req.file.buffer, req.file.originalname);

    const plantnetRes = await axios.post(
      'https://my-api.plantnet.org/v2/identify/all?api-key=2b10YywZzJthAm0Lq62Wd4dBe',
      form,
      { headers: form.getHeaders() }
    );

    // PlantNet
    const plantName = plantnetRes.data.results[0].species.scientificNameWithoutAuthor;

    // Trefle.io
    const trefleRes = await axios.get(`https://trefle.io/api/v1/plants/search?token=usr-Wg12CcnVrvH6gbaKaVes8tL7sv-T46aGytGd_l3rP5s&q=${plantName}`);
    res.json(trefleRes.data.data[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error identifying plant' });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

// 2 fitur masih blm bisa, setelah backend di deploy ke Railway