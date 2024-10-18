import { Header } from "./Header"
import { Home } from "./Home"
import { Explore } from "./Explore"
import {register} from 'swiper/element/bundle'

register()
function App() {

  return (
    <div className="p-0 m-0 bg-neutral-100">
      <Header></Header>
      <Home></Home>
      <Explore></Explore>
    </div>
  )
}

export default App
