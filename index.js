const { Client } = require('pg')


const client = new Client({
    connectionString: 'postgresql://jvalcarcel:1234@localhost:5432/amusic'});

client.connect (err => {
    if(err){
        console.log('Error al conectarse', err);
    }
})

