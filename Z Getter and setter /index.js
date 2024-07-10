class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth >= 0){
            this._width = newWidth;
        }else{
            throw new Error('Width must be a positive number');
        }
    }

    set height(newHeight){
        if(newHeight >= 0){
            this._height = newHeight;
        } else{
            throw new Error('Height must be a positive number');
        }
    }
    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }


}
let shape = new Rectangle(5,1000)
shape.width = 5;
console.log(shape.height);
console.log(shape.width);
