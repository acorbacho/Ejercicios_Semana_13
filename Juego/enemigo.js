class Enemigo extends Personaje {
    constructor(nombre, vida, ataque, nivel) {
        super(nombre, vida, ataque, nivel)
    }

    expDrop(herolv) {
        let experience = (this.nivel * 5) / herolv
        return experience
    }
}