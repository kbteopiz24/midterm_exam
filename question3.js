const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! John Doe' }); // Replace "John Doe" with your full name.
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

//PORT NUMBER
//PORT = 3000