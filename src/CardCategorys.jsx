import image from "./images/brownie.jpg"

export function CardCategorys({Imagem,title}) {
    return(
        <div className={` relativo bg-red-400`}>
            <img className="w-full absolute h-1/3" src={`${Imagem}`} alt="" />            
            <a className="w-36 h-12 bg-neutral-50 absolute text-neutral-500 rounded-full shadow-md shadow-neutral-400 font-medium text-xl left-auto items-center justify-center flex  mx-auto" href="">{title}</a>
        </div>
    )
}