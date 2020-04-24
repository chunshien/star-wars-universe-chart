export function parseValue(val){
    let value = parseFloat(val.replace(/,/g, "")) || 0
    return value;
}

export function dynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}