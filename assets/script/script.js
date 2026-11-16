// Mini-libreria — Settimana VII Giorno I
//
// Devi fare 4 cose:
// 1. Definire una classe Libro (titolo, autore, anno, letto)
// 2. Definire una classe LibroDigitale che estende Libro (aggiunge formato, dimensioneMb)
// 3. Aggiungere un listener al form che crea una nuova istanza e la aggiunge all'array
// 4. Renderizzare la lista nel <ul id="lista-libri"> via innerHTML
//
// Bonus: bottone "Segna come letto" su ogni elemento, gestito con event delegation.


// === Classi ===
class Libro {
    letto = false;
    constructor(_titolo, _autore, _anno) {
        this.id = crypto.randomUUID();
        this.titolo = this.titolo;
        this.autore = this.autore;
        this.anno = this.anno;
    }
    // metodo che modifica lo stato interno dell'oggetto
    segnaComeLetto() {
        this.letto = true;
    }

    // metodo formato un Libro base è cartaceo.
    // Le sottoclassi lo SOVRASCRIVONO (override) con la loro versione.
    formato(){
        return "cartaceo";
    }
}

class LibroDigitale extends Libro {
    constructor(parameters) {
        
    }
}


// === Stato (array di libri) ===



// === Render ===



// === Eventi ===
