export const NegatifPositif = (tableau) => {
    let gauche = 0;
    let droite = tableau.length - 1;

    while (gauche < droite) {
        if (tableau[gauche] <= 0) {
            gauche++;
        } else if (tableau[droite] > 0) {
            droite--;
        } else {
            [tableau[gauche], tableau[droite]] = [tableau[droite], tableau[gauche]];
            gauche++;
            droite--;
        }
    }

    return tableau;
}

console.log(NegatifPositif([3, -1, 0, 4, -2, 5, -3]));
