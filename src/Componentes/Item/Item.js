const Item=[{
    "id": 1,
    "nombre": "Taza magica personalizada",
    "descripcion": "diseña la taza perfecta para regalar o regalarte.",
    "precio": 500,
    "stock": 30,
    "imagen": "../../Multimedia/Fotos/productotaza.jpg"
},
{
    "id": 2,
    "nombre": "Resma A4 Autor",
    "descripcion": "cada resma contiene 500 hojas blancas listas para usar.",
    "precio": 650,
    "stock": 87,
    "imagen": "../../Multimedia/Fotos/productoresmaa4.jpg"
},
{
    "id": 3,
    "nombre": "Resma A3 Autor",
    "descripcion": "cada resma contiene 250 hojas listas para usar.",
    "precio": 900,
    "stock": 64,
    "imagen": "../../Multimedia/Fotos/productoresmaa3.jpg"
},
{
    "id": 4,
    "nombre": "Aceite de Coco",
    "descripcion": "el mejor aceite para usar.",
    "precio": 750,
    "stock": 25,
    "imagen": "../../Multimedia/Fotos/productococo.jpg"
},
{
    "id": 5,
    "nombre": "Dulce de leche chico",
    "descripcion": "el mejor dulce regional para tus postres.",
    "precio": 340,
    "stock": 18,
    "imagen": "../../Multimedia/Fotos/productodulcechico.jpg"
},
{
    "id": 6,
    "nombre": "Dulce de leche grande",
    "descripcion": "el mejor dulce regional ahora mas grande",
    "precio": 790,
    "stock": 18,
    "imagen": "../../Multimedia/Fotos/productodulcegrande.jpg"
},
{
    "id": 7,
    "nombre": "Sello automatico",
    "descripcion": "perzonaliza tu sello con hasta 4 lineas.",
    "precio": 450,
    "stock": 42,
    "imagen": "../../Multimedia/Fotos/productosello.jpg"
},
{
    "id": 8,
    "nombre": "Yerba don arregui",
    "descripcion": "la yerba para el pueblo.",
    "precio": 350,
    "stock": 20,
    "imagen": "../../Multimedia/Fotos/productoyerba.jpg"
},
{
    "id": 9,
    "nombre": "Yerba kalena",
    "descripcion": "yerba mate con palo lista para usar.",
    "precio": 450,
    "stock": 20,
    "imagen": "../../Multimedia/Fotos/productoyerba2.jpg"
}]

const getFetch= new Promise((res,rej)=>{
    let condition=true
    if(condition){
        setTimeout(() => {
            res(Item)
        }, 2000);
    }
    else{
        rej(console.log("No hay productos"))
    }
})
export default getFetch;