function image1(){
    let imgcontainer = document.getElementById("product")
    imgcontainer.innerHTML = `<img src="images/image-product-1.jpg" alt="">
    <div class="list-item">
        <div>
            <img src="images/image-product-1-thumbnail.jpg" alt="" onclick="image1()">
        </div>
        <div>
            <img src="images/image-product-2-thumbnail.jpg" alt="" onclick="image2()">
        </div>
        <div>
            <img src="images/image-product-3-thumbnail.jpg" alt="" onclick="image3()">
        </div>                    
        <div>
            <img src="images/image-product-4-thumbnail.jpg" alt="" onclick="image4()">
        </div>
    </div>`
}
function image2(){
    let imgcontainer = document.getElementById("product")
    imgcontainer.innerHTML = `<img src="images/image-product-2.jpg" alt="">
    <div class="list-item">
        <div>
            <img src="images/image-product-1-thumbnail.jpg" alt="" onclick="image1()">
        </div>
        <div>
            <img src="images/image-product-2-thumbnail.jpg" alt="" onclick="image2()">
        </div>
        <div>
            <img src="images/image-product-3-thumbnail.jpg" alt="" onclick="image3()">
        </div>                    
        <div>
            <img src="images/image-product-4-thumbnail.jpg" alt="" onclick="image4()">
        </div>
    </div>`
}
function image3(){
    let imgcontainer = document.getElementById("product")
    imgcontainer.innerHTML = `<img src="images/image-product-3.jpg" alt="">
    <div class="list-item">
        <div>
            <img src="images/image-product-1-thumbnail.jpg" alt="" onclick="image1()">
        </div>
        <div>
            <img src="images/image-product-2-thumbnail.jpg" alt="" onclick="image2()">
        </div>
        <div>
            <img src="images/image-product-3-thumbnail.jpg" alt="" onclick="image3()">
        </div>                    
        <div>
            <img src="images/image-product-4-thumbnail.jpg" alt="" onclick="image4()">
        </div>
    </div>`
}
function image4(){
    let imgcontainer = document.getElementById("product")
    imgcontainer.innerHTML = `<img src="images/image-product-4.jpg" alt="">
    <div class="list-item">
        <div>
            <img src="images/image-product-1-thumbnail.jpg" alt="" onclick="image1()">
        </div>
        <div>
            <img src="images/image-product-2-thumbnail.jpg" alt="" onclick="image2()">
        </div>
        <div>
            <img src="images/image-product-3-thumbnail.jpg" alt="" onclick="image3()">
        </div>                    
        <div>
            <img src="images/image-product-4-thumbnail.jpg" alt="" onclick="image4()">
        </div>
    </div>`
}

function decrement(){
    let counter = document.getElementById("quantity")
    let quantity = document.getElementById("number").value
    quantity--;
    if(quantity <= 0){
        quantity=0;
    }

    counter.innerHTML = `<div><button class="buttonmin" onclick="decrement()"><img src="images/icon-minus.svg" alt=""></button></div>
    <input type="text" class="quantity" id="number" value="${quantity}" readonly>
    <div><button class="buttonplus" onclick="increment()"><img src="images/icon-plus.svg" alt=""></button></div>
    <div><button class="cart-button"><img src="images/icon-cart.svg" alt=""><p>Add to cart</p></button></div>`
}

function increment(){
    let counter = document.getElementById("quantity")
    let quantity = document.getElementById("number").value
    quantity++;

    counter.innerHTML = `<div><button class="buttonmin" onclick="decrement()"><img src="images/icon-minus.svg" alt=""></button></div>
    <input type="text" class="quantity" id="number" value="${quantity}" readonly>
    <div><button class="buttonplus" onclick="increment()"><img src="images/icon-plus.svg" alt=""></button></div>
    <div><button class="cart-button"><img src="images/icon-cart.svg" alt=""><p>Add to cart</p></button></div>`
}