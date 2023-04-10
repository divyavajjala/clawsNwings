import backgroundImage from "../../../src/assets/bg-image.jpg"
// import borderimage from "../../assets/My project.png"

// import Header from "../header";
function Home() {
    return(
        <div>
            <div style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:"no-repeat",height: 530, width: 1400}}>
            {/* <Header></Header> */}
            </div>
            {/* <h2>Home</h2> */}
            {/* <span><img className = "border-img" src={borderimage} alt="border"></img></span> */}
            <span className="text"><span className=" ribbon-1 ribbon"></span>We take small party orders also.</span>
        </div>

    )
}
export default Home;