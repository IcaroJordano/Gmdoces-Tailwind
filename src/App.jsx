import { Header } from "./Header"
import { Home } from "./Home"
import { Explore } from "./Explore"
import {register} from 'swiper/element/bundle'
import { Sobre } from "./Sobre"

register()
function App() {

  return (
    <div className="pb-10 m-0 bg-neutral-100">
      <Header></Header>
      <Home></Home>
      <Explore></Explore>
      <Sobre></Sobre>
    </div>
  )
}

export default App
