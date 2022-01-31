function spawn_enemigos() {
    var enemigo = []
    var enemigo_spawneado
    var numero_enemigo = numero_random(0, 10)
    enemigo[0] = new Enemigo('Jabalí', 30, 1, 1)
    enemigo[1] = new Enemigo('Basilisco', 50, 5, 3)
    enemigo[2] = new Enemigo('Kodo', 100, 3, 5)
    enemigo[3] = new Enemigo('Avispa Silítida', 50, 10, 8)
    enemigo[4] = new Enemigo('Dracoleón', 100, 10, 12)
    enemigo[5] = new Enemigo('Devastador', 120, 12, 15)
    enemigo[6] = new Enemigo('Hidra', 150, 15, 18)
    enemigo[7] = new Enemigo('Mole', 200, 15, 20)
    enemigo[8] = new Enemigo('Centauro Gigante', 200, 20, 21)
    enemigo[9] = new Enemigo('Dragón Alaescarcha', 250, 25, 25)
    enemigo[10] = new Enemigo('Archimonde', 1000, 50, 50)
    enemigo_spawneado = enemigo[numero_enemigo]
    return enemigo_spawneado
} 