class Heroe extends Personaje {
    constructor(nombre, vida, ataque, nivel, experiencia) {
        super(nombre, vida, ataque, nivel)
        this.experiencia = experiencia
    }

    get getExperiencia() {
        return this.experiencia;
    }

    set setExperiencia(_experiencia) {
        this.experiencia = _experiencia;
    }

    levelUp(exp) {
        //this.setExperiencia = this.experiencia + exp
        this.experiencia += exp
        var contador = 0

        while (this.experiencia > 10) {
            this.experiencia -= 10
            contador++
        }

        for (let i = contador; i > 0; i--) {
            this.nivel++
            this.vida = Math.floor(this.vida * 1.5)
            this.ataque = Math.floor(this.ataque * 1.15)
        }
    }

    atackLevel() {
        let atackLevel = this.ataque * this.nivel
        return atackLevel
    }
}