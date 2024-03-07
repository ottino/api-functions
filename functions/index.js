const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'hola maxi-code!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});