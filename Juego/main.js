/**
 * Función principal.
 */
function main() {
    salida('Bienvenido al juego. Logra derrotar a Archimonde para ganar, de lo contrario, el mundo sucumbirá a la Legión Ardiente.')
    salida('Irán apareciendo enemigos aleatoriamente, al vencerlos te harás más fuerte. Si no consigues hacerte lo suficientemente fuerte antes de que Archimonde aparezca, morirás.')
    var nombreHeroe = entrada('Introduce el nombre de tu héroe.')
    var heroe = new Heroe(nombreHeroe, 100, 20, 1, 0)
    var ultimo_turno
    var enemigo
    var experiencia_ganada
    while (heroe.stillAlive()) {
        enemigo = spawn_enemigos()
        ultimo_turno = true
        salida(heroe.getNombre + ' stats.\nLV: ' + heroe.getNivel + '\nHP: ' + heroe.getVida + '\nATK: ' + heroe.getAtaque + '\nEXP: ' + heroe.getExperiencia)

        while (heroe.stillAlive() && enemigo.stillAlive()) {

            if (ultimo_turno) {
                salida('Turno de: ' + heroe.getNombre + '(' + heroe.getNivel + ').')
                salida('¡¡¡' + heroe.getNombre + '(' + heroe.getNivel + ')' + ' ataca a ' + enemigo.getNombre + '(' + enemigo.getNivel + ')!!!')
                enemigo.setVida = enemigo.receiveDmg(heroe.getAtaque)
                salida('Vida de ' + enemigo.getNombre + '(' + enemigo.getNivel + '): ' + enemigo.getVida)
                ultimo_turno = !ultimo_turno
            } else {
                salida('Turno de: ' + enemigo.getNombre + '(' + enemigo.getNivel + ').')
                salida('¡¡¡' + enemigo.getNombre + '(' + enemigo.getNivel + ')' + ' ataca a ' + heroe.getNombre + '(' + heroe.getNivel + ')!!!')
                heroe.setVida = heroe.receiveDmg(enemigo.getAtaque)
                salida('Vida de ' + heroe.getNombre + '(' + heroe.getNivel + '): ' + heroe.getVida)
                ultimo_turno = !ultimo_turno
            }
        }

        if (ultimo_turno) {
            salida('Ha ganado ' + enemigo.getNombre + '.\nGAME OVER')
        } else {
            salida('Ha ganado ' + heroe.getNombre + '.')
            experiencia_ganada = enemigo.expDrop(heroe.getNivel)
            heroe.levelUp(experiencia_ganada)
            if (enemigo.getNombre === 'Archimonde') {
                salida('Enhorabuena, has derrotado al jefe Archimonde. El reino del terror ha acabado, y con él, este juego. ¡Suerte en tu próxima aventura!')
                break
            } else {
                continue
            }
        }
    }
}
main()