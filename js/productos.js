//PRODUCTOS

let productos =[
    {
        id: 1,
        nombre:"Arroz Integral",
        precio:800,
        marca:"Dos Hermanos",
        categoria:"Almacén Saludable",
        stock:40,
        cantidad:"1kg",
        descuento:true,
        observacion:"Sin TACC",
        img: "../imagenes/arroz integral - 2 hermanos.jpg"
    },
    {   id: 2,
        nombre:"Te Rojo Orgánico",
        precio:1400,
        marca:"Hierbas del Oasis",
        categoria:"Infusiones",
        stock:30,
        cantidad:"20 SAQ",
        descuento:false,
        observacion:"Libre de glutten y Sin TACC",
        img: "../imagenes/te rojo  organico - hierbas del oasis.png"

    },
    {   id: 3, 
        nombre:"Pan con Semillas",
        precio:600,
        marca:"Vida Veggie",
        categoria:"Panificados",
        stock:20,
        cantidad:"1 unidad",
        descuento:false,
        observacion:"Vegano",
        img: "../imagenes/pan con semillas - vida veggie.png"

    },
    {   id: 4,
         nombre:"Criollos Veganos",
         precio:550,
         marca:"Vida Veggie",
         categoria:"Panificados",
         stock:15,
         cantidad:"200 gr",
         descuento:false,
         observacion:"Vegano",
         img: "../imagenes/criollos vegan - vida veggie.jpg"

     },
    {   id: 5,
        nombre:"Pizzetas",
        precio:500,
        marca:"Vida Veggie",
        categoria:"Panificados",
        stock:20,
        cantidad:"2 unidades",
        descuento:false,
        observacion:"Vegano",
        img: "../imagenes/pizzetas veganas - vida veggie.jpg"

     },
     {   id: 6,
         nombre:"Pasta de Maní",
         precio:2027,
         marca:"ManiKing",
         categoria:"Almacén Saludable",
         stock:35,
         cantidad:"1 unidad",
         descuento:false,
         observacion:"Vegano, sin TACC",
         img: "../imagenes/pasta de mani - mani king.jpg"

     },
    {   id: 7,
        nombre:"Tortillas Integrales",
        precio:600,
        marca:"Orali",
        categoria:"Almacén Saludable",
        stock:34,
        cantidad:"6 unidades",
        descuento:true,
        observacion:"Vegano, con harina integral",
        img: "../imagenes/tortillas integrales - orali.jpg"

    },
    {   id: 8,
        nombre:"Hamburguesa de Hongos",
        precio:2460,
        marca:"Nutree",
        categoria:"Almacén Saludable",
        stock:15,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, sin TACC ",
        img: "../imagenes/hamburguesas hongos - nutree.jpg"

    },
    {   id: 9,
        nombre:"Hamburguesa de Espinaca",
        precio:2400,
        marca:"Nutree",
        categoria:"Almacén Saludable",
        stock:19,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, sin TACC ",
        img: "../imagenes/hamburguesas espinaca - nutree.jpg"

    },
    {   id: 10,
        nombre:"Medallón de Espinaca",
        precio:1300,
        marca:"Vegetalex",
        categoria:"Almacén Saludable",
        stock:12,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, ingredientes 100% vegetales",
        img: "../imagenes/hamburguesas espinaca - vegetalex.jpg"   

    },
    {   id: 11,
        nombre:"Medallón de Calabaza, avena y chia",
        precio:1300,
        marca:"Vegetalex",
        categoria:"Almacén Saludable",
        stock:10,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, ingredientes 100% vegetales",
        img: "../imagenes/hamburguesas avena y chia - vegetalex.jpg"

    },
    {   id: 12,
        nombre:"Hamburguesa de Quinoa",
        precio:2460,
        marca:"Nutree",
        categoria:"Almacén Saludable",
        stock:8,
        cantidad:"4 unidades",
        descuento:false,
        observacion:"Vegano, sin TACC ",
        img: "../imagenes/hamburguesas quinoa - nutree.jpg"

    },
    {   id: 13,
         nombre:"Te en Hebras, finas hierbas",
         precio:1500,
         marca:"Breaking Cups",
         categoria:"Infusiones",
         stock:5,
         cantidad:"1 unidad",
         descuento:false,
         observacion:"Te en hebras, finas hierbas",
         img: "../imagenes/Te en Hebras, finas hierbas - breaking cups.jpg"

    },
    {   id: 14,
        nombre:"Te en Hebras, coco",
        precio:1200,
        marca:"Breaking Cups",
        categoria:"Infusiones",
        stock:5,
        cantidad:"1 unidad",
        descuento:false,
        observacion:"Te en hebras, sabor a coco y frutas",
        img: "../imagenes/Te en Hebras, coco - breaking cups.jpg"

    },
    {   id: 15,
        nombre:"Detox frutos del bosque",
        precio:1700,
        marca:"Saint Gottard",
        categoria:"Infusiones",
        stock:12,
        cantidad:"20 SAQ",
        descuento:false,
        observacion:"Sabor frutos del bosque",
        img: "../imagenes/te frutos del busque - saint gottard.jpg"

    },
    {   id: 16,
        nombre:"Infusión herbal mix",
        precio:2500,
        marca:"Inti Zen",
        categoria:"Infusiones",
        stock:8,
        cantidad:"15 SAQ",
        descuento:false,
        observacion:"Infusión 4 mezclas de Hierbas",
        img: "../imagenes/te herbal mix - inti zeb.jpg"

    },
    {   id: 17,
        nombre:"Granola castaña premium",
        precio:6300,
        marca:"Verde Diet",
        categoria:"Frutos secos y Cereales",
        stock:13,
        cantidad:"1KG",
        descuento:false,
        observacion:"Granola con castaña",
        img: "../imagenes/granola castaña - verde diet.jpg"

    },
    {   id: 18,
        nombre:"Granola Fitness",
        precio:4800,
        marca:"Croccanto",
        categoria:"Frutos secos y Cereales",
        stock:16,
        cantidad:"1KG",
        descuento:false,
        observacion:"Granola",
        img: "../imagenes/granola fitness - croppers.jpg"

    },
    {   id: 19,
        nombre:"Maní con cáscara",
        precio:1280,
        marca:"Croppers",
        categoria:"Frutos secos y Cereales",
        stock:40,
        cantidad:"500 gr",
        descuento:false,
        observacion:"Sin TACC",
        img: "../imagenes/mani con cascara - croppers.jpg"

    },
    {   id: 20,
        nombre:"Copos Maíz sin Azucar",
        precio:1000,
        marca:"Croppers",
        categoria:"Frutos secos y Cereales",
        stock:50,
        cantidad:"500 gr",
        descuento:false,
        observacion:"sin azúcar y Sin TACC",
        img: "../imagenes/copos de maiz sin azucar.jpg"

    },
    {   id: 21,
        nombre:"Almendras",
        precio:1876,
        marca:"California",
        categoria:"Frutos secos y Cereales",
        stock:40,
        cantidad:"100 gr",
        descuento:false,
        observacion:"Fraccionada",
        img: "../imagenes/almendras - california.jpg"

     },
    {   id: 22,
        nombre:"Catañas de Cajú",
        precio:3000,
        marca:"California",
        categoria:"Frutos secos y Cereales",
        stock:10,
        cantidad:"100 gr",
        descuento:false,
        observacion:"Fraccionada",
        img: "../imagenes/castañas de caju.jpg"

    },
    
    {   id: 24,
        nombre:"Semilla Girasol",
        precio:560,
        marca:"For Good",
        categoria:"Semillas",
        stock:37,
        cantidad:"125 gr",
        descuento:false,
        observacion:"Girasol tostado",
        img: "../imagenes/semillas de girasol.jpg"

    },
    
];
