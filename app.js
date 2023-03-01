// Enlever les doublons d'un tableau

const array = ['Tomate', 'Tomate', 'Fraise', 'Fraise', 'Banane', 'Banane']
// Objet set (array) en argument
// Set permet de donner un objet avec des valeurs uniques
// "..." pour convertir en tableau
const arrayCleaned = [...new Set(array)]
console.log(arrayCleaned)


// Remplacer une valeur dans un tableau

const fournitures = ['Stylos', 'Ciseaux', 'Pinceau', 'Règle', 'Compas']
// A partir de l'index 0 on remplace 2 éléments par "Gomme" et "Sac"
// Donc remplace "Stylos" et "Ciseaux" par "Gomme" et "Sac"
fournitures.splice(0, 2, "Gomme", "Sac")
console.log(fournitures)

// Nettoyer un tableau

const array2 = ['Tomate', 'Tomate', 'Fraise', 'Fraise', 'Banane', 'Banane']
// Vide complètement le tableau
array2.length = 0
console.log(array2)

// Convertir un tableau en objet

const array3 = ['Stylos', 'Ciseaux', 'Pinceau', 'Règle', 'Compas']
// Passe tout les éléments du tableau dans l'objet
const arrayToObj = {...array3}
console.log(arrayToObj)

// Remplir un tableau

const array4 = new Array(20).fill('9')
console.log(array4)