import ValenteerLogo from "../../../assets/images/valanteer.png";

function JoinUsPage() {
  return (
    <div className=" flex flex-col md:flex-row md:gap-6 md:px-2  md:py-24 max-w-[1280px]" >
      {/* Subscribe Card */}
      <div className="bg-[#1179B6] text-white md:rounded-lg p-6 md:p-10 flex-1">
        <h2 className="text-2xl font-bold mb-3 md:text-[36px] text-[#E9E5DF]">
          Subscribe to our Newsletter
        </h2>
        <p className=" font-normal text-sm leading-[24px] mb-6 md:text-[18px] tracking-wide">
          Receive inspirational quotes, articles, and tips for daily spiritual
          living, as well as the latest news, information about upcoming online
          meditations and events.
        </p>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md border-none text-black focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border-none text-black focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 rounded-md border-none text-black focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex h-12 px-8 justify-center items-center gap-2 rounded-md font-medium text-white transition w-4/6 md:w-4/6 lg:w-2/6 mt-2 md:mt-4"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), #0A7EB4",
            }}
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Volunteer Card */}
      <div
        className="bg-[#6C8A2B] text-white md:rounded-lg p-6 md:p-10 flex-1 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${ValenteerLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h2 className="text-2xl font-bold mb-3 md:text-[36px] text-[#E9E5DF]">
            Are you Interested as Volunteer
          </h2>
          <p className="font-normal text-sm leading-[24px] mb-6 md:text-[18px] tracking-wide">
            Receive inspirational quotes, articles, and tips for daily spiritual
            living, as well as the latest news, information about upcoming
            online meditations and events from Yogoda Satsanga Society of India.
          </p>
        </div>
        <button className="bg-[#E9E5DF] text-[#4A5A20] tracking-tight py-3 px-6 rounded-md font-medium hover:bg-gray-200 transition w-4/6 md:w-4/6 lg:w-2/6 ">
          Register here
        </button>
      </div>
    </div>
  );
}

export default JoinUsPage;
