import express from "express";

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

// rotas/endpoints
app.get("/", (req, res) => {

    res.json({
        message: "Primeira rota, criada com sucesso!"
    });

});

app.listen(3000, console.log("App funcionando!"));