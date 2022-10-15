const products = [{
      id: 1,
      nombre: "Café Nescafe Tradicion",
      precio: 2000,
      stock: 10,
      category: "hola",
      description: "lorsadadfvseiufhbodainvciahsgouindcvljaiwjdciansasclkn"
   },
   {
      id: 2,
      nombre: "Café Cabrales Grano",
      precio: 1400,
      stock: 15,
      category: "hola",
      description: "lorsadadfvseiufhbodainvciahsgouindcvljaiwjdciansasclkn"
   },
   {
      id: 3,
      nombre: "Café Nescafe Dolca",
      precio: 1200,
      stock: 14,
      category: "chau",
      description: "lorsadadfvseiufhbodainvciahsgouindcvljaiwjdciansasclkn"
   }
]

export const getProducts = () => {

   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products)
      }, 2000)
   })
}


export const getProductsById = (id) => {
   return new Promise (resolve => {
      setTimeout(()=> {
         resolve(products.find(prod => {
            return prod.id === parseInt(id)
         }))
      }, 500)
   })
}

export const getProductsByCategory = (categoryId) => {
   return new Promise (resolve => {
      setTimeout(()=> {
         resolve(products.filter(prod=>prod.category === categoryId))
      }, 500)
   })
}