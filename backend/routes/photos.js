const express = require("express");
const { Query } = require("node-appwrite");
const { storage, tablesDB } = require("../appwrite");

const router = express.Router();

router.get("/random", async (req, res) => {
    try {
        const result = await tablesDB.listRows({
            databaseId: process.env.APPWRITE_DATABASE_ID,
            tableId: process.env.APPWRITE_TABLE_ID,
            queries: [Query.limit(1000)]
        });

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Brak zdjęć w bazie"
            });
        }

        const photo = result.rows[Math.floor(Math.random() * result.rows.length)];

        res.json({
            year: photo.year,
            month: photo.month,
            day: photo.day,
            url: `/api/photos/image/${photo.url}`
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Nie udało się wylosować zdjęcia"
        });
    }
});

router.get("/image/:name", async (req, res) => {
    try {
        const fileId = req.params.name;
        const bucketId = process.env.APPWRITE_BUCKET_ID;

        // Pobierz metadane pliku
        const file = await storage.getFile({
            bucketId,
            fileId
        });

        // Pobierz zawartość zdjęcia
        const image = await storage.getFileView({
            bucketId,
            fileId
        });

        res.setHeader("Content-Type", file.mimeType);
        res.setHeader("Cache-Control", "no-store");

        res.send(Buffer.from(image));

    } catch (error) {
        console.error("Błąd pobierania zdjęcia:", error);

        res.status(error.code || 500).json({
            error: "Nie udało się pobrać zdjęcia"
        });
    }
});

module.exports = router;