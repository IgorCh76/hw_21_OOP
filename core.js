class Product {
    #id;
    #title;
    #manufacture;
    #price;

    constructor(id, title, manufacture, price) {
        this.#id = id;
        this.#title = title;
        this.#manufacture = manufacture;
        this.#price = price;
    }

    toString() {
        return `id - ${this.#id} product - ${this.title} manufacture - ${this.manufacture.toUpperCase()} price - ${this.price}`;
    }

    set id(id){
        if(this.#id){
            return -1;
        }else{
            this.#id = id;
        }
    }

    get id() {
        return this.#id;
    }

    set titleSetter(newTitle) {
        this.#title = newTitle;
    }

    get title() {
        return this.#title;
    }

    set manSetter(newManufacture) {
        this.#manufacture = newManufacture;
    }

    get manufacture() {
        return this.#manufacture;
    }

    set priceSetter(newPrice) {
        this.#price = +newPrice;
    }

    get price() {
        return this.#price;
    }
}

class Milk extends Product {
    #fat;

    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this.#fat = fat;
    }

    set fatSetter(newFat) {
        this.#fat = +newFat;
    }

    get fat() {
        return this.#fat;
    }

    toString() {
        return `id - ${this.id} product - ${this.title} manufacture - ${this.manufacture.toUpperCase()} price - ${this.price} fat - ${this.fat}`;
    }
}

class Chocolate extends Product {
    #kind;

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this.#kind = kind;
    }

    set kindSetter(newKind) {
        this.#kind = newKind;
    }

    get kind() {
        return this.#kind;
    }

    toString() {
        return `id - ${this.id} product - ${this.title} manufacture - ${this.manufacture.toUpperCase()} price - ${this.price} kind - ${this.kind}`;
    }
}

class Wine extends Product {
    #alcohol;

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this.#alcohol = alcohol;
    }

    set alcoholSetter(newAlcohol) {
        this.#alcohol = newAlcohol;
    }

    get alcohol() {
        return this.#alcohol;
    }

    toString() {
        return `id - ${this.id} product - ${this.title} manufacture - ${this.manufacture.toUpperCase()} price - ${this.price} alcohol - ${this.alcohol}%`;
    }
}

class Store {
    #products = [];

    addProduct(product) {
        if (this.#products.find(p => p.id === product.id))
            return false;
        else {
            this.#products.push(product);
            return true;
        }
    }

    getAllProducts() {
        return [...this.#products];
    }

    getByType(type) {
        return this.#products.filter((value) => value.constructor.name === type);
    }
}