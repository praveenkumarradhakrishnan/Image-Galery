import Image from "./components/Gallery"
import { arr } from "./components/Gallery"
function App(){
  return(
  <div>
  <div className="frame">
      <h1 className="heading">IMAGE GALLERY</h1>
      <div className="gallery">
          {
              arr.map(function (item) {
                  return (
                      <div className="input_img">
                          <Image src={item.src} name={item.name} ></Image>
                      </div>
                  )
              })
          }</div>
  </div>    </div>)
}
export default App;
