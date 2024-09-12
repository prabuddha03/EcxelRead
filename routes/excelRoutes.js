const express = require('express');
const { extractExcelData } = require('../controllers/excelController');
const multer = require('multer');

const router = express.Router();

// Set up Multer to handle file uploads
const upload = multer({
    storage: multer.memoryStorage(), // Store the file in memory
    limits: { fileSize: 10 * 1024 * 1024 } // Limit file size to 10MB
});

// POST request to upload Excel file and extract data
router.post('/upload', upload.single('file'), extractExcelData);

module.exports = router;
