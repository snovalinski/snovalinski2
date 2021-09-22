const productos = [
    {id: 1,foto: "https://ae01.alicdn.com/kf/Ha7aee4e7894d48edb0f96d0edba5ef5fF/Electric-Sonic-Dental-whitener-Scaler-Teeth-Whitening-kit-teeth-Calculus-Tartar-Remover-Tools-Cleaner-Tooth-Stain.jpg"},
    {id: 2,foto: "https://ae01.alicdn.com/kf/Ha7aee4e7894d48edb0f96d0edba5ef5fF/Electric-Sonic-Dental-whitener-Scaler-Teeth-Whitening-kit-teeth-Calculus-Tartar-Remover-Tools-Cleaner-Tooth-Stain.jpg"}
    
];


export const getFetch =new Promise((resolve)=>{

    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})