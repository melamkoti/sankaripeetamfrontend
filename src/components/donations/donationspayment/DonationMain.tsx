import donation from "../../../assets/images/donation.jpg";

function DonationMain() {
  return (
    <div className="flex justify-center items-center p-4 md:py-4  ">
        <div
          className="w-full rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
          style={{
            backgroundImage: `url(${donation})`,
          }}
        ></div>
      </div>
  );
}

export default DonationMain;
