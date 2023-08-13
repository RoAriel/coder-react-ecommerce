import data from 'product.json'

export function getItems(){
    return new Promise((resolve,reject) =>{
        resolve(data)
    })

};

export function getIten(id){
    return new Promise((resolve,reject) =>{
        const item = data.filter(item => item.id === id)
        resolve(item[0])
    })
};

export function getCategory(catagory){
    return new Promise((resolve,reject) =>{
        const itemCategory = data.filter(item => item.catagory === catagory)
        resolve(itemCategory)
    })
};