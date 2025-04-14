import c1 from "../assets/images/c1.png"
import c2 from "../assets/images/c2.png"
import c3 from "../assets/images/c3.png"
import c4 from "../assets/images/c4.png"
import c5 from "../assets/images/c5.png"
import c6 from "../assets/images/c6.png"
import c7 from "../assets/images/c7.png"
import c8 from "../assets/images/c8.png"
import c9 from "../assets/images/download.png"
function Image(props) {
    return (
        <div>
            <div>
                <img src={props.src}></img>
                <p>{props.name}</p>
            </div>
        </div>

    )
}
const arr = [
    {
        src: c9,
        name: "Nazuko Kamado",
    },
    {
        src: c2,
        name: "Monkey D Luffy",
    },
    {
        src: c3,
        name: "Sun Jin-W00",
    },

    {
        src: c4,
        name: "Itachi uchiha",
    },
    {
        src: c5,
        name: "Sanji",
    },
    {
        src: c6,
        name: "Chopper",
    },
    {
        src: c7,
        name: "Brook",
    },
    {
        src: c1,
        name: " Demon Nazuko Kamado",
    },
    {
        src: c8,
        name: "Giyu Tomioka",
    }
    
]
export default Image
export {arr}