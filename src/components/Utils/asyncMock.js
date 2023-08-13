import data from '../../product.json'

export function getItems(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(data)

        },1000)
    })

};

export function getItem(id){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const item = data.filter(item => item.id === id)
            resolve(item[0])

        },1000)
    })
};

export function getCategory(catagory){
    return new Promise((resolve,reject) =>{
        const itemCategory = data.filter(item => item.catagory === catagory)
        resolve(itemCategory)
    })
};