export function simpleCart(cartList) {
    const simplifiedItems = []
    cartList.map(item => {
        const { id, name,volumen, price, count } = { ...item }
        const simpleItem = { id, name: name+' .v'+volumen, price, count }
        simplifiedItems.push(simpleItem)
    })
    return simplifiedItems
}