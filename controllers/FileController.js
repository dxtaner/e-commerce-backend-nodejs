const fs = require("fs");

const FileController = {
  uploadFile: (req, res) => {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded." });
    }

    const filePath = `uploads/${req.file.originalname}`;
    fs.writeFile(filePath, req.file.buffer, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "An error occurred while uploading the file.",
        });
      }
      res.status(200).json({
        success: true,
        message: "File uploaded successfully.",
        filePath,
      });
    });
  },

  getFile: (req, res) => {
    const { filename } = req.params;
    const filePath = `uploads/${filename}`;

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        return res
          .status(404)
          .json({ success: false, message: "File not found." });
      }
      res.setHeader("Content-Type", "application/octet-stream");
      res.status(200).send(data);
    });
  },

  getAllFiles: (req, res) => {
    fs.readdir("uploads", (err, files) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred while reading files.");
      }
      res.json({ files });
    });
  },
};

module.exports = FileController;
