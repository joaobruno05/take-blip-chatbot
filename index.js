const express = require('express');
const api = require('./challenge/Api/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (_req, res) => {
  try {
    const { data } = await api.get('/repos?&sort=created&direction=asc');

    const dataFilter = data.filter(({ language }) => language === 'C#');

    const dataFilterMap = dataFilter.map(({ name, description, owner }) => ({
      title: name,
      subtitle: description,
      image: owner.avatar_url,
    }));

    const result = dataFilterMap.slice(0, 5);

    return res.status(200).json({ ...result });
  } catch (error) {
    const { response: { status, data } } = error;

    if (status) return res.status(status).json({ error: data.message });

    return res.status(500).json({ message: 'Internal Error' });
  }
});

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
