
module.exports = {

    /**
     * Download file
     */
    download (req, res) {

        const file = (process.env.UPLOAD_DIR || "imagenes/") + req.params.fileName;
        res.download(file);
    },
}