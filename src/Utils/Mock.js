const productos = [
    {id: 1,foto: "https://ibb.co/2dXCxHB"}
    {id: 2,foto: "https://ibb.co/2dXCxHB"}
    
];
// no entiendo el error que tengo aqui


export const getFetch =new Promise((resolve)=>{

    setTimeout(function()=>{
        resolve(productos)
    }, 2000)
})