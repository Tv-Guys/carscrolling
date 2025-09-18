const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello From Carscrolling Backend !');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
