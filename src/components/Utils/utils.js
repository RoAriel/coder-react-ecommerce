export function simpleCart(cartList) {
    const simplifiedItems = []
    cartList.map(item => {
        const { id, name,volumen, price, count } = { ...item }
        const simpleItem = { id, name: name+' .v'+volumen, price, count }
        simplifiedItems.push(simpleItem)
    })
    return simplifiedItems
}

export function toastStyleAdd(){
    
    const style = {
        style: {
          border: '1px solid #09c',
          padding: '16px',
          color: '#09c',
        },
        iconTheme: {
          primary: '#09c',
          secondary: '#FFFAEE',
        },
      }
    return style;
}

export function toastStyleDel(){
    
  const style = {
    icon: '⛔',
      style: {
        border: '1px solid #09c',
        padding: '16px',
        color: '#09c',
      },
      iconTheme: {
        primary: '#09c',
        secondary: '#FFFAEE',
      },
    }
  return style;
}