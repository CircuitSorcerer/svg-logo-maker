class Shapes {
    constructor(type, colour) {
        this.type = type;
        this.colour = colour;
        this.svgWidth = 300;
        this.svgHeight = 200;
        this.posX = this.svgWidth/2;
        this.posY = this.svgHeight/2;
    }

    render() {
        const svgString = ``;
        
    }
}

class Circle extends Shapes {
    constructor(colour) {
        super('circle', colour)
    }
}

class Triangle extends Shapes {
    constructor(colour) {
        super('polygon', colour)
    }
    
}

class Rectangle extends Shapes