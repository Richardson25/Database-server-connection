const mongoose = require("mongoose"); // Pour pouvoir réaliser la connection
const Db = mongoose.connection; // Pour pouvoir réaliser la connection
const app = require("./app") // Pour pouvoir réaliser la connection
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    IP_SERVER,
    API_VERSION

} = require("./constants");  // Pour pouvoir faire appel aux données

const PORT = process.env.POST || 3977; // Port utiliser pour le passage des données( pour trouver un site, 3977 => si l'info. n'est pas disponibles )

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`) //Appel à mongoose pour retablir la connection

Db.on("error" , (error) => {
    console.log(error)
})
Db.once("open",() =>{
    app.listen(PORT, () =>{
        console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)
})

}); // Codes utilisés pour la vérification de la connection du serveur à la base de données


//*** Le fichier index.js => utiliser pour gérer mongoose