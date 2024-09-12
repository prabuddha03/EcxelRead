const xlsx = require('xlsx');

// Controller to handle Excel file upload and data extraction
const extractExcelData = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    try {
        // Convert the buffer from Multer to a readable workbook
        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });

        // Get the first sheet's data
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert the sheet to JSON
        const jsonData = xlsx.utils.sheet_to_json(worksheet);

        // Respond with the extracted data
        res.status(200).json({
            message: 'Excel file processed successfully',
            data: jsonData
        });
    } catch (error) {
        res.status(500).json({ message: 'Error processing Excel file', error });
    }
};

module.exports = { extractExcelData };
