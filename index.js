const express = require('express');
const exphbrs = require('express-handlebars');

const app = express();
// handlebars
app.engine("handlebars", exphbrs.engine());
app.set('view engine', 'handlebars');

app.use(express.static("public"))

const port = 3000;

// importando as rotas
const userRoutes = require('./routers/users');
// ler o body

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json());

// middlewares
const checkAuth = function (req, res, next) {
    req.auth = true;

    if (req.auth) {
        console.log('Autenticado... pode continuar');
        next();
    }
    else {
        console.log('Não autenticado');
        res.send("Você não tem permissão para acessar essa página");
    }
}
app.use(userRoutes);
app.get('/', checkAuth, (req, res) => {
    const user = {
        nome: "richard",
        idade: 21
    }
    const users = ["richard", "carlos", "clara"];
    // res.send("ola mundo!");
    res.render("home", { user, users });

})
// pagina não encontrada
app.use(function (req, res, next) {
    res.send("Página não encontrada");
})

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}!!`);
});