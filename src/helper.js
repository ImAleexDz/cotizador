//Diferencia de años
export function getYearDifference(year) {
    return new Date().getFullYear() - year;
};

//Total a pagar según la marca
export function calculate(marca) {
    let increase;

    switch(marca) {
        case 'europeo':
            increase = 1.30;
            break;
        case 'americano':
            increase = 1.15;
            break;
        case 'asiatico':
            increase = 1.05;
            break;
        default:
            break;
    }

    return increase;
};

// Calcular el tipo de seguro
export function getPlan (plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
};

//Muestra la primer letra mayúscula
export function mayus (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}