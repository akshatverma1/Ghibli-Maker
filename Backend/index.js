// const express = require("express");
import express from "express"
import 'dotenv/config'
import { writeFile } from "node:fs/promises";
import Replicate from "replicate";

const replicate = new Replicate();

const app = express();
const POR = process.env.PORTs;
console.log(POR);



app.listen(POR, () => {
    console.log("Port is Running on = " + POR);
})

app.get("/", (req, res) => {
    res.send("Akshat");
})

const input = {
    prompt: "In the style of Studio Ghibli, an old warm house with lush indoor plants and a burning fireplace and turkish carpets at night, a kid on the floor reading a book, snow visible outside through a large window "
};


//=> output_0.png written to disk


app.get("/api", (req, res) => {
    async function callingApi() {
        const output = await replicate.run("karanchawla/studio-ghibli:fd1975a55465d2cf70e5e9aad03e0bb2b13b9f9b715d49a27748fc45797a6ae5", { input });

        for (const [index, item] of Object.entries(output)) {
            await writeFile(`output_${index}.png`, item);
        }
    }
    callingApi();
})