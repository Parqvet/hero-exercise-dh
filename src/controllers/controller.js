const fs = require('fs');

const home = (req, res) => {
    res.send('​Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
}

const heroes = (req, res) => {
    let heroesJson = require('../heroes.json');
    res.json(heroesJson);
}

const detallesHero = (req, res) => {
    let leerJson = fs.readFileSync('./src/heroes.json', 'utf-8');
    let heroes = JSON.parse(leerJson);
    let id = req.params.id;

    // funciona pero si le agrego else se rompe
    heroes.filter(hero => {
        if (id == hero.id) {
            res.send(`Hola mi nombre es ${hero.nombre} y soy ${hero.profesion}`)
        }
    })
    

    // si le agrego else se rompe
    /* heroes.find(hero => {
        if (id == hero.id) {
            res.send(hero)
        }
    }) */

    // me deuvelve object object y si le agrego else se rompe
    /* heroes.map(hero => {
        if (id == hero.id) {
            res.send(`${hero}`)
        }
    }) */

    // me devuelve bien pero con else se rompe
   /*  heroes.forEach(hero => {
        if (hero.id == id) {
            res.send(`Hola mi nombre es ${hero.nombre} y soy ${hero.profesion}`)
        }
    }) */
    
}

module.exports = {
    home,
    heroes,
    detallesHero
}