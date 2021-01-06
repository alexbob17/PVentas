class Product{
    constructor(name,price,year){
        this.name = name;
        this.price=price;
        this.year=year;
    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
             <div class="card-body">
                <b> Product name  </b> : ${product.name}
                <b> Product price </b> : ${product.price}
                <b> Product year </b> : ${product.year}
                <a href="" class="btn btn-danger rounded">Delete</a>
             </div>
        </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(){

    }
    showMessage(){

    }
}


// DOM EVENTS

document.getElementById('product-form')
.addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    
    const  product =  new Product(name, price, year);

    const ui = new UI();
    ui.addProduct(product);
    
    e.preventDefault();
});