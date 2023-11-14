const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const filePath = 'E:/Final Resume/Shriprada_Resume_final.pdf'; // Replace with the path to your file

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(err.status).end();
    } 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
