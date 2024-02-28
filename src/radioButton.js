export function celsiusConverter(celsiusRadio, value) {
    if (celsiusRadio.checked == true) {
        return value;
    } else {
        return (value * (9/5)) + 32;
    }
}