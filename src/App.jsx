import { Header } from "./Header"
import { Home } from "./Home"
import { Explore } from "./Explore"
import { Sobre } from "./Sobre"
import { Categorys } from "./Categorys"

import {register} from 'swiper/element/bundle'
register()

function App() {
  return (
    <div className="pb-10 m-0 bg-neutral-100">
      <Header></Header>
      <Home></Home>
      <Explore></Explore>
      <Sobre></Sobre>
      <Categorys></Categorys>
    </div>
  )
}

export default App
