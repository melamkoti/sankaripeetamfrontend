import DonationMain from "./DonationMain";
import DonationPay from "./DonationPay";

function DonationPaymentPage() {
    return(
        <div className="main_head w-screen overflow-hidden">

            <DonationMain />
            <DonationPay />

        </div>
    )
}

export default DonationPaymentPage;