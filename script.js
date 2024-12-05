// 130. Moderní JavaScript - Ladíme detaily další příklad, kdy šipková notace selhává

const car = {
    color: "modrá", 
    getInfo: function(){
        return `Farba tohto auta je ${this.color}` // vypíše modrá
    }
}

console.log(car.getInfo())


// skúsime prepísať funkciu na šípkovú notáciu
const car2 = {
    color: "modrá", 
    getInfo: () => `Farba tohto auta je ${this.color}` 
    // vypíše Farba tohto auta je undefined 
    // šípková notácia nepoznám zápis this, preto vypíše undefined
    
}

console.log(car2.getInfo()) // vypíše Farba tohto auta je undefined 