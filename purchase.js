const discount = 20
const tax = 5

function purchase(bookDetails) {
    let { price, isSale } = bookDetails
    if (!isSale) {
        return 'Book is not for sale!'
    }

    priceDiscount = (price * discount) / 100
    priceAfterDiscount = price - priceDiscount

    amountTax = (priceAfterDiscount * tax) / 100
    finalPrice = priceAfterDiscount + amountTax

    console.log(priceDiscount)
    console.log(priceAfterDiscount)
    console.log(amountTax)
    console.log(finalPrice)
}

let book = {
    title: 'A Dance with Dragons',
    price: 150000,
    isSale: true
}

purchase(book)

