const productos = [
    {id: 1,foto: "https://ibb.co/2dXCxHB"},
    {id: 2,foto: "https://ibb.co/2dXCxHB"}
    
];


export const getFetch =new Promise((resolve)=>{

    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})