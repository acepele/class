class makeUp {
    constructor(color, size, brand, shade) {
        this.color = color;
        this.size = size;
        this.brand = brand;
        this.shade = shade;
    }

    makeUpStats() {
        return 'This makeup has ' + this.color + ' color and is  ' + this.size + ' , is from ' + this.brand + ' brand and has a beautiful ' + this.shade + ' shade!'
    }
}

const lipstick = new makeUp('red', '14oz', 'maybelline', 'raspberry');

console.log(lipstick);
console.log(lipstick.makeUpStats());