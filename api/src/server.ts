import Fastify from "fastify";
import cors from "@fastify/cors";
import { Routes } from "./routes/routes";

const app = Fastify();

app.register(cors);
app.register(Routes);


app.listen({
    port: 3333
}).then(() => {
    console.log("API is running on port 3333")
});