// import Header from "../header";
import image1 from "../../assets/backdrop.jpg"
import image2 from "../../assets/pizza.jpg"
import image3 from "../../assets/image-4.jpg"
import image4 from "../../assets/image-5.jpg"
import image5 from "../../assets/image-6.jpg"
import image6 from "../../assets/image-7.jpg"
import image7 from "../../assets/image-8.jpg"
import image8 from "../../assets/image-9.jpg"
import image9 from "../../assets/image-10.jpg"
import image10 from "../../assets/image-11.jpg"
import image11 from "../../assets/image-12.jpg"
import image12 from "../../assets/image-13.jpg"
// import borderimage from "../../assets/My project.png"



function Gallery() {
    return(
        <div>
            {/* <Header></Header> */}
            <h2>Here is our Gallery</h2>
            {/* <span><img className = "border-img" src={borderimage} alt="border"></img></span> */}
            <div className="gallery">
                <img src={image1} alt="backdrop"></img>
                <img src={image2} alt="pizza"></img>
                <img src={image3} alt="food"></img>
                <img src={image4} alt="food2"></img>
                <img src={image5} alt="food3"></img>
                <img src={image6} alt="food4"></img>
                <img src={image7} alt="food5"></img>
                <img src={image8} alt="food6"></img>
                <img src={image9} alt="food7"></img>
                <img src={image10} alt="food5"></img>
                <img src={image11} alt="food6"></img>
                <img src={image12} alt="food7"></img>
            </div>
        </div>
    )
}
export default Gallery;