const products = [
    {
       id:1,
       nombre:"Café Nescafe Tradicion",
       precio:2000,
       stock: 10
    },
    {
       id:2,
       nombre:"Café Cabrales Grano",
       precio:1400,
       stock: 15
    },
    {
       id:3,
       nombre:"Café Nescafe Dolca",
       precio:1200,
       stock: 14
    }
 ]

export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve (products)
        },2000)
    })
 }