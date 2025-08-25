import DonationMain from "./DonationMain";
import DonationPay from "./DonationPay";

function DonationPaymentPage() {
    return(
        <div className="main_head  overflow-hidden  lg:mt-[140px]">

            <DonationMain />
            <DonationPay />

        </div>
    )
}

export default DonationPaymentPage;