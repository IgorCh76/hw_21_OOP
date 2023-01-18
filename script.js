(()=>{
    class Products{
        #id;
        title;
        manufacture;
        price;

        constructor(id, title, manufacture, price) {
            this.#id = id;
            this.title = title;
            this.manufacture = manufacture;
            this.price = price;
        }
        toString(){
            return `id - ${this.#id} product - ${this.title} manufacture - ${this.manufacture.toUpperCase()} price - ${this.price}`;
        }
        get id(){
            return this.#id;
        }
        set titleSetter(newTitle){
            this.title = newTitle;
        }
        get title(){
            return this.title;
        }
        set manSetter(newManufacture){
            this.manufacture = newManufacture;
        }
        get manufacture(){
            return this.manufacture;
        }
        set priceSetter(newPrice){
            this.price = newPrice;
        }
        get price(){
            return this.price;
        }
    }
    class Milk extends Products{
        fat;

        constructor(id, title,manufacture, price, fat) {
            super(id, title, manufacture, price);
            this.fat = fat;
        }
        set fatSetter(newFat){
            this.fat = newFat;
        }
        get fat(){
            return this.fat;
        }
        toString(){
            return `id - ${this.id} product - ${this.title} manufacture - ${this.manufacture.toUpperCase()} price - ${this.price} fat - ${this.fat}`;
        }
    }
    class Chocolate extends Products{
        kind;

        constructor(id, title, manufacture, price, kind) {
            super(id, title, manufacture, price);
            this.kind = kind;
        }
        set kindSetter(newKind){
            this.kind = newKind;
        }
        get kind(){
            return this.kind;
        }
        toString(){
            return `id - ${this.id} product - ${this.title} manufacture - "${this.manufacture.toUpperCase()}" price - ${this.price} kind - ${this.kind}`;
        }
    }
    class Wine extends Products{
        alcohol;

        constructor(id, title, manufacture, price, alcohol) {
            super(id, title, manufacture, price);
            this.alcohol = alcohol;
        }
        set alcoholSetter(newAlcohol){
            this.alcohol = newAlcohol;
        }
        get alcohol(){
            return this.alcohol;
        }
        toString(){
            return `id - ${this.id} product - ${this.title} manufacture - ${this.manufacture.toUpperCase()} price - ${this.price} alcohol - ${this.alcohol}%`;
        }
    }
    class Store{
        constructor() {
            this.products = [];
        }
        addProduct(product){
            if(this.products.find(p => p.id === product.id))
                return false;
            else{
                this.products.push(product);
                return true;
            }
        }
        getAllProducts(){
            return [...this.products];
        }
        getByType(type){
            return this.products.filter((value) => value.constructor.name === type);
        }
    }

    const store = new Store();
    const milk1 = new Milk(101, 'Ice cream', "Tnuva", 10, 0.5);
    const milk2 = new Milk(102, "Cream-cheese", 'Tnuva', 50, 25);
    const milk3 = new Milk(103, "Milk", 'Tnuva', 6, 3);
    const milk4 = new Milk(104, "Sour-cream", 'Tnuva', 8, 27);
    const milk5 = new Milk(105, "Yellow-cheese", 'Tnuva', 30, 30);
    const chock1 = new Chocolate(111, 'Milk-Cow', 'Elit', 10, 'milk' );
    const chock2 = new Chocolate(112, 'Splendid', 'Elit', 18, 'dark' );
    const chock3 = new Chocolate(113, 'Rosemarie', 'Strauss', 24, 'milk' );
    const chock4 = new Chocolate(114, 'Ferrero roshe', 'Ferrero', 40, 'milk' );
    const chock5 = new Chocolate(115, 'Excellence', 'Lindt', 20, 'dark' );
    const wine1 = new Wine(121, 'Kaberne', 'Carmel', 50, 12.5);
    const wine2 = new Wine(122, 'Vodka', 'Khortitsa', 80, 40);
    const wine3 = new Wine(123, 'Har hermon', 'Yarden', 60, 12.5);
    const wine4 = new Wine(124, 'Khvanchkara', 'Genazvale', 50, 12.5);
    const wine5 = new Wine(125, 'Jack', 'Jack Daniels', 100, 40);
    store.addProduct(milk1);
    store.addProduct(milk2);
    store.addProduct(milk3);
    store.addProduct(milk4);
    store.addProduct(milk5);
    store.addProduct(chock1);
    store.addProduct(chock2);
    store.addProduct(chock3);
    store.addProduct(chock4);
    store.addProduct(chock5);
    store.addProduct(wine1);
    store.addProduct(wine2);
    store.addProduct(wine3);
    store.addProduct(wine4);
    store.addProduct(wine5);
    store.getAllProducts().forEach(item => {
        console.log(item);
    });
    console.log(store.getByType('Wine'));

})();