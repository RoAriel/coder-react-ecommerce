import data from '../../product.json'

export function getItems() {
    return new Promise((resolve, reject) => {
            resolve(data)
    })

};

export function getItem(id) {
    return new Promise((resolve, reject) => {
        const item = data.filter(item => item.id === id)
            resolve(item[0])
    })
};

export function getCategory(category) {
    return new Promise((resolve, reject) => {
            const itemCategory = data.filter(item => item.category === category)
            console.log('Dentro del metodo esto es:', itemCategory )
            resolve(itemCategory)
    })
};