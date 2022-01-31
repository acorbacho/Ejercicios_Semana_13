class Personaje {
    constructor(nombre, vida, ataque, nivel) {
        this.nombre = nombre
        this.vida = vida
        this.ataque = ataque
        this.nivel = nivel
    }

    get getNombre() {
        return this.nombre;
    }

    get getVida() {
        return this.vida;
    }

    get getAtaque() {
        return this.ataque;
    }

    get getNivel() {
        return this.nivel;
    }

    set setNombre(_nombre) {
        this.nombre = _nombre;
    }

    set setVida(_vida) {
        this.vida = _vida;
    }

    set setAtaque(_ataque) {
        this.ataque = _ataque;
    }

    set setNivel(_nivel) {
        this.nivel = _nivel;
    }

    receiveDmg(dmg) {
        if (this.vida >= dmg) {
            this.vida = this.vida - dmg
        } else if (this.vida < dmg) {
            this.vida = 0
        }
        return this.vida
    }

    stillAlive() {
        if (this.vida === 0) {
            return false
        } else {
            return true
        }
    }
}