import backgroundImage from "../../../src/assets/bg-image.jpg"
// import borderimage from "../../assets/My project.png"

// import Header from "../header";
function Home() {
    return(
        // <div style={{backgroundImage:`url(${backgroundImage})`, position:'absolute', top:0, left: 0, backgroundRepeat:"no-repeat"}}></div>
        // <div style={{background:`#fff url(${backgroundImage}) center center no-repeat`, width: '100%', height: '100%' , backgroundRepeat:"no-repeat"}}></div>
        // <div style={{background:`#fff url(${backgroundImage}) center center no-repeat`, width: 1400, height: 800, backgroundRepeat:"no-repeat"}}></div>
        <div style={{backgroundImage:`url(${backgroundImage})`, width: 1400, height: 720, backgroundRepeat:"no-repeat"}}></div>
    );
}
export default Home;