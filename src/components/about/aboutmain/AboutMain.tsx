import aboutusmain from "../../../assets/images/aboutusmain.png"

function AboutMain() {
    return(
        <div className="flex justify-center items-end p-12 h-[70vh] min-w-screen" style={{backgroundImage : `url(${aboutusmain})`, backgroundPosition: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>

            <p className="text-4xl font-semibold tracking-wider text-[#ffffff]">ABOUT SANATANA SANKARI PEETAM</p>

        </div>
    )
}

export default AboutMain; 