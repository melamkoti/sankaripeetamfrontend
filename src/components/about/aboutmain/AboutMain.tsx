import aboutusmain from "../../../assets/images/aboutusmain.png"

function AboutMain() {
    return(
        <div className="flex justify-center items-end p-12 h-[60vh] min-w-screen" style={{backgroundImage : `url(${aboutusmain})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>

            <p className="text-6xl font-bold text-[#ffffff]">ABOUT SANATANA SANKARI PEETAM</p>

        </div>
    )
}

export default AboutMain; 