import { FiExternalLink } from "react-icons/fi";

export function Sobre() {
    return(
        <section className="pl-5">
            <h2 className="text-3xl text-neutral-600 font-serif" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe, cum architecto obcaecati ratione culpa sunt ea cumque illo, laboriosam hic impedit quisquam aliquid eos quia eum et ut. Incidunt.</h2>
            <a className="font-bold mt-3 text-neutral-700 underline flex items-center"  href="">Leia nossa historia <FiExternalLink className="ml-1"></FiExternalLink></a>
            <img className="w-11/12 h-56 pt-5" src="https://images.pexels.com/photos/2072152/pexels-photo-2072152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </section>
    )
}