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

    res.status(200).json({
        message: "Primeira rota, criada com sucesso!"
    });

});

app.post("/createproduct", (req, res) => {

    const name = req.body.name;
    const price = req.body.price;

    console.log(name);
    console.log(price);

    res.status(201).json({
        message: "Produto criado com sucesso!"
    });

});

app.listen(3000, console.log("App funcionando!"));