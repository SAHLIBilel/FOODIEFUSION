export function DBConnexion(db){
    db.connect(err => {
        if (err) {
            console.error('Connexion Avec la base de Données FoodieFusion est Impossible' + err.stack);
            return;
        }
        console.log('Bien connecter avec la base de données "FoodieFusion"');
    });
}
