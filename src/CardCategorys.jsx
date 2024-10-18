export function CardCategorys({Imagem,title}) {
    return(
        <div className={`w-full h-96 bg-cover pt-5 bg-center bg-[url(${Imagem})]`}>
            <a className="w-36 h-12 bg-neutral-50 text-neutral-600 rounded-full shadow-lg shadow-neutral-500 font-medium text-xl items-center justify-center flex mx-auto" href="">{title}</a>
        </div>
    )
}