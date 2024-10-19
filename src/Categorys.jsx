import image from "./images/brownie.jpg"

import { CardCategorys } from "./CardCategorys";

export function Categorys() {
    return (
        <section className="w-full py-20" >
            <div className={`h-96 bg-cover pt-10 bg-center bg-[url('https://images.pexels.com/photos/11798334/pexels-photo-11798334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]`}>
                <a className="w-36   h-12 bg-neutral-50 text-neutral-600 rounded-full shadow-lg shadow-neutral-500 font-medium text-xl items-center justify-center flex mx-auto" href="">Pascoa</a>
            </div>

            <div className={`w-full h-96 bg-cover pt-10 bg-center bg-[url("https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]`}>
                <a className="w-36  h-12 bg-neutral-50 text-neutral-600 rounded-full shadow-lg shadow-neutral-500 font-medium text-xl items-center justify-center flex mx-auto" href="">Bolos</a>
            </div>

            <div className={`w-full h-96 bg-cover pt-10 bg-center bg-[url("https://images.pexels.com/photos/6612658/pexels-photo-6612658.jpeg?auto=compress&cs=tinysrgb&w=400")]`}>
                <a className="w-36  h-12 bg-neutral-50 text-neutral-600 rounded-full shadow-lg shadow-neutral-500 font-medium text-xl items-center justify-center flex mx-auto" href="">Doces</a>
            </div>
        </section>
    )
}