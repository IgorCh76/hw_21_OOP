(()=>{
    const store = new Store();
    const milk1 = new Milk(101, 'Ice cream', "Tnuva", 10, 0.5);
    const chock1 = new Chocolate(111, 'Milk-Cow', 'Elit', 10, 'milk' );
    const wine1 = new Wine(121, 'Kaberne', 'Carmel', 50, 12.5);
    store.addProduct(milk1);
    store.addProduct(chock1);
    store.addProduct(wine1);
    store.getAllProducts().forEach(item => {
        console.log(item);
    });
    console.log(store.getByType('Wine'));

    const formLoader = document.getElementById('loader');
    const content = document.getElementById('content');
    const productList = document.getElementById('productsLink');
    const addProd = document.getElementById('addLink');
    const cards = document.querySelectorAll('.card');
    // const cards = [];
    const nav_list = document.getElementById('nav_list');

    formLoader.addEventListener('change', e=>{
        let productType = e.target.value;
        switch(productType){
            case'milk':
                formLoader.querySelector('#specialIn')
                    .innerHTML = `<input class="form-control" type="number" name="fat"
                       placeholder="Type fat">`;
                break;
            case'chocolate':
                formLoader.querySelector('#specialIn')
                    .innerHTML = `<input class="form-control" type="text" name="kind"
                       placeholder="Type kind">`;
                break;
            case'wine':
                formLoader.querySelector('#specialIn')
                    .innerHTML = `<input class="form-control" type="number" name="alcohol"
                       placeholder="Type alcohol">`;
                break;
        }
    });
    formLoader.onsubmit = e =>{
        e.preventDefault();
        let res = {};
        switch(e.target.type.value){
            case 'milk':
                res = new Milk(+e.target.id.value,
                    e.target.title.value,
                    e.target.manufacture.value,
                    +e.target.price.value,
                    +e.target.fat.value);
                console.log(e.target.type.value);
                break;
            case 'chocolate':
                res = new Chocolate(+e.target.id.value,
                    e.target.title.value,
                    e.target.manufacture.value,
                    +e.target.price.value,
                    e.target.kind.value);
                break;
            case 'wine':
                res = new Wine(+e.target.id.value,
                    e.target.title.value,
                    e.target.manufacture.value,
                    +e.target.price.value,
                    +e.target.alcohol.value);
                break;
        }
        store.addProduct(res);
        console.log(store);
        formLoader.reset();
    }
    addProd.onclick = e =>{
        formLoader.style.display = 'flex';
        content.style.display = 'none';
    }

    function renderProductList(allProducts) {
        function getOwnProperty(product) {
            if(product.fat){
                return `fat: ${product.fat}`;
            }else if(product.kind){
                return `kind: ${product.kind}`;
            }else if(product.alcohol){
                return `alcohol: ${product.alcohol}`
            }else{
                return ``;
            }
        }
        function card(product) {
            return `<div class="card active">
                   <h2>${product.constructor.name}</h2>
                   <h3>${product.title}</h3>
                   <h3>${product.manufacture}</h3>
                   <h3>price: ${product.price}</h3>
                   <h4>${getOwnProperty(product)}</h4>
                   </div>`;
        }

        content.innerHTML = allProducts.map(card).join('\n');
    }

    productList.onclick = e =>{
        content.style.display = 'flex';
        formLoader.style.display = 'none';
        renderProductList(store.getAllProducts());
    }

    nav_list.addEventListener('click', e => {
        console.log(e.target.getAttribute('data-name'));
        const prodType = e.target.getAttribute('data-name');
        if(prodType === 'Milk'){
            renderProductList(store.getByType('Milk'));
        }else if(prodType === 'Wine'){
            renderProductList(store.getByType('Wine'));
        }else if(prodType === 'Chocolate'){
            renderProductList(store.getByType('Chocolate'));
        }else{
            renderProductList(store.getAllProducts());
        }
    });
})();