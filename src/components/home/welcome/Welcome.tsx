import welcomemain from "../../../assets/images/welcomemainimg.png";
// import welcomeVideo from '../../../assets/images/peetam-video.mp4'

function Welcome() {
    return(
        <div className="h-screen w-screen relative">
            <div className="h-full">
                <img src={welcomemain} alt="welcomemain" className="w-full h-full object-cover object-center"/>
                {/* <video src={welcomeVideo}></video> */}
            </div>

        </div>
    )
}

export default Welcome;