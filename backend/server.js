require("dotenv").config();

const express = require("express");
const cors = require("cors");

const photosRouter = require("./routes/photos");

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api/photos", photosRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("Backend działa na porcie " + process.env.PORT);
});
