import donation from "../../assets/images/donation.jpg"

function DonationMain() {
    return(
        <div className="p-24 h-[80vh] flex justify-center items-center" style={{backgroundImage: `url(${donation})`, backgroundSize: "cover", backgroundPosition: "bottom"}}>

            <p className="text-8xl font-bold text-white ">Donation</p>

        </div>
    )
}

export default DonationMain;