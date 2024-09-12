const express = require('express');
const excelRoutes = require('./routes/excelRoutes');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the Excel routes
app.use('/api/excel', excelRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
