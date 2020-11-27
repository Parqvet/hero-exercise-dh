const fs = require('fs');

let leerJson = fs.readFileSync('./src/data/heroes.json', 'utf-8')
let heroParser = JSON.parse(leerJson);

module.exports = {
    herores: (req, res) => {
        res.json(require('../data/heroes.json'));
    },
    detallesHero: (req, res) => {
        let id = req.params.id;

        let idHero = heroParser.find(hero => hero.id == id);

        if (idHero == null) {
            res.send('El heroe no existe');
        } else {
            res.send(`Hola mi nombres: ${idHero.nombre} y soy ${idHero.profesion}`)
        }
    }
}