const products = [{
      id: 1,
      nombre: "Pica²",
      img:'/images/1.png',
      precio: 2000,
      stock: 10,
      category: "EN -A",
      description: "¡Por fin está aquí! El digno sucesor de nuestro Pica 1 en la clase A. El PICA² se ha mejorado aún más en términos de comportamiento de despegue, estabilidad y la seguridad que le hace un parapente para el entrenamiento y también para el vuelo libre posterior conviertiendose en puro placer."
   },
   {
      id: 2,
      nombre: "Falco",
      img:'/images/2.png',
      precio: 1400,
      stock: 10,
      category: "EN -A",
      description: "El Falco es el resultado de la combinación y evolución de varios componentes importantes que Icaro ha ido desarrollando en los últimos años. Es una vela con extraordinarias prestaciones para su categoría. Se ha centrado los esfuerzos en la calidad de la retroalimentación de la vela para obtener una interacción perfecta entre el piloto y su parapente. El excelente comportamiento de despegue, el control muy intuitivo de la vela y la estabilidad sólida como una roca (incluso con el acelerador completamente abajo) garantizan un alto nivel de seguridad y fiabilidad desde el primer vuelo."
   },
   {
      id: 3,
      nombre: "Pandion",
      img:'/images/3.png',
      precio: 1200,
      stock: 10,
      category: "EN -B",
      description: "El Pandion, la nueva vela intermedia básica, sucede a nuestro Instinct TE con un concepto completamente nuevo: una sensación de vuelo espléndida y cómoda que incorpora la última tecnología. El Pandion permite un rápido progreso en el desarrollo de habilidades de vuelo sin tener que comprometer la seguridad."
   },
   {
      id: 4,
      nombre: "Gravis²",
      img:'/images/4.png',
      precio: 2500,
      stock: 10, 
      category: "EN -B",
      description: "En términos de rendimiento y seguridad, el GRAVIS² es el parapente más equilibrado de la gama ICARO. Su rendimiento y manejo a los de parapentes de una categoría superior. En vuelo acelerado, este parapente es extremadamente maniobrable y tiene un deslizamiento excepcional para esta clase."
   },
   {
      id: 5,
      nombre: "Buteo XC",
      img:'/images/5.png',
      precio: 2800,
      stock: 10, 
      category: "EN -C",
      description: "Después de 2 años de desarrollo e innumerables prototipos, el BUTEO XC, basado en el diseño del GRAVIS, supone un punto de inflexión para la industria del parapente. Hemos podido combinar la seguridad de los medios de clase B con el notable rendimiento de los EN-C de alta gama. De las 22 maniobras de prueba de DHV (Asociación Alemana de vuelo libre, entidad homologadora), 18 fueron clasificadas EN-A y solo 4 clasificadas EN-B. Creemos sinceramente que este planeador influirá en el mundo del parapente de forma duradera. Completamente hecho de materiales ligeros, la vela pesa solo 222 g / m². El BUTEO XC tiene 82 costillas y 80 mini costillas adicionales en el borde de ataque. Esto resulta, por tanto, en un total de 162 costillas en el borde de ataque, lo que normalmente caracteriza el diseño de parapentes EN-D."
   },
   {
      id: 6,
      nombre: "Sitta",
      img:'/images/6.png',
      precio: 2700,
      stock: 10, 
      category: "EN -D",
      description: "El Sitta es nuestro planeador ultraligero de hike & fky, que no solo será fiel compañero para tus caminatas de montaña, sino que también enriquecerá tus vuelos de montaña de todas las formas posibles."
   },
   {
      id: 7,
      nombre: "Aquila",
      img:'/images/7.png',
      precio: 2100,
      stock: 10, 
      category: "EN -D",
      description: "El Achila es nuestro parapente de freestyle. Basándonos en nuestro mejor perfil térmico, pudimos combinar dos mundos: la agilidad, la velocidad y la dinámica de una vela acro y las capacidades térmicas y la maniobrabilidad de un parapente de alto nivel."
   },
   {
      id: 8,
      nombre: "Xenus",
      img:'/images/8.png',
      precio: 2500,
      stock: 10, 
      category: "EN -B",
      description: "El Xenus es perfecto para iniciarse en el mundo del estilo libre. Su facilidad de maniobra flyback y un comportamiento de vuelo tolerante hacen que sea una vela fácil para avanzar en seguridad. Gracias a la experiencia de Xandi Meschuh, leyenda del vuelo acrobático, pudimos crear un ala de estilo libre para la categoría EN-B para un PTV de 65 a 110 kg."
   },
   {
      id: 9,
      nombre: "Nikita 5",
      img:'/images/9.png',
      precio: 2600,
      stock: 10, 
      category: "EN -B",
      description: "El NIKITA 5 es la quinta generación diseñada y desarrollada a partir de los conocimientos de nuestros profesionales. Precisión y claridad son su lema. Esta vela acro cumple con todos tus requisitos."
   },
   {
      id: 10,
      nombre: "Parus²",
      img:'/images/10.png',
      precio: 3000,
      stock: 10, 
      category: "EN -B",
      description: "Parus es nuestro planeador en tándem con tecnología de punta de tiburón. Disponible en dos tamaños, tiene un comportamiento de despegue y aterrizaje extremadamente fácil, excelente maniobrabilidad y notables propiedades de deslizamiento."
   },
   {
      id: 11,
      nombre: "Kiwi",
      img:'/images/11.png',
      precio: 1200,
      stock: 10, 
      category: "Mini Wing",
      description: "El KIWI es tu fiel compañero para que el pilotaje en tierra sea divertivo y educativo, incluso cuando las condiciones del viento son exigentes."
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