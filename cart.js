const Fullprice = document.querySelector(".ProductDetails .AllPrice")
const CartProductTitle = document.querySelector(".ProductDetails .Title")
const ProductName = document.querySelector("#sneaker-name")
const CartOnePiecePrice = document.querySelector(".ProductDetails .OnePrice")
const OnePiecePrice = document.querySelector("#new-price")
const CartPiecesAmount = document.querySelector(".ProductDetails .Amount")
const PiecesAmount = document.querySelector("#PiecesNum")
const CartDelete = document.querySelector("#CartDlete")
const ShoppingList = document.querySelector(".ShopingList-Checkout")
const ShoppingListEmpty = document.querySelector(".ShopingListEmpty")
const AddToCart = document.querySelector("#AddToCart")
const cart = document.querySelector("#cart")
const PopUpWindow = document.querySelector(".PopUpWindow")
const FullProductsAmount = document.querySelector(".FullProductsAmount")
document.querySelector("#productBuyingImg").src = document.querySelector(".ImgPrdct").src
cart.addEventListener("click", e => {
    PopUpWindow.classList.toggle("none")
})
document.addEventListener("click", e => {
    if (!e.target.closest(".PopUpWindow") && !e.target.closest("#cart")) {
        PopUpWindow.classList.add("none")
    }
})
AddToCart.addEventListener("click", e => {

    if (Number(PiecesAmount.value) > 0) {
        ShoppingList.classList.remove("none")
        ShoppingListEmpty.classList.add("none")
        FullProductsAmount.classList.remove("none")
        if (PiecesAmount.value < 10) {
            FullProductsAmount.innerHTML = PiecesAmount.value
        } else {
            FullProductsAmount.innerHTML = "+9"
        }

        CartProductTitle.innerHTML = ProductName.innerHTML
        CartOnePiecePrice.innerHTML = OnePiecePrice.innerHTML
        CartPiecesAmount.innerHTML = PiecesAmount.value
        Fullprice.innerHTML = `$${parseFloat(Number(OnePiecePrice.innerHTML) * parseInt(PiecesAmount.value)).toFixed(2)}`
    }
})
CartDelete.addEventListener("click", e => {
    ShoppingList.classList.add("none")
    ShoppingListEmpty.classList.remove("none")
    FullProductsAmount.classList.add("none")
    document.querySelector("#PiecesNum").value = 0
})