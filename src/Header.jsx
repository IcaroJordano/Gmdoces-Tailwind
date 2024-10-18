import { FaBasketShopping } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

export function Header() {
    return(
        <header className="border border-transparent p-0 items-center border-b-neutral-600/10 fixed top-0 flex justify-between h-20 w-full ">
            <img className="bg-pink-50  w-16 h-16 ml-5 rounded-full" src="https://media-for1-1.cdn.whatsapp.net/v/t61.24694-24/455599010_1039709134312745_965647445426224043_n.jpg?ccb=11-4&oh=01_Q5AaIGU5WSdO503dsQ_i2DRkeuv_5mNSz2DBc-15K6jTXAGm&oe=671F34A4&_nc_sid=5e03e0&_nc_cat=102" alt="" />
            <div className="h-full  text-neutral-50/90 w-3/12 m-0 flex justify-around items-center">
                <CiShoppingBasket className="w-9 h-9   ">.</CiShoppingBasket>
               <CiMenuFries className="w-8 h-8 ">.</CiMenuFries>
            </div>
        </header>
    )
}