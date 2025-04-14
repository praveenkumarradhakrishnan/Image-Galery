import Image from "./components/Gallery"
import { arr } from "./components/Gallery"
function App(){
  return(
  <div>
  <div class="frame">
      <h1 class="heading">IMAGE GALLERY</h1>
      <div class="gallery">
          {
              arr.map(function (item) {
                  return (
                      <div class="input_img">
                          <Image src={item.src} name={item.name} ></Image>
                      </div>
                  )
              })
          }</div>
  </div>    </div>)
}
export default App;
