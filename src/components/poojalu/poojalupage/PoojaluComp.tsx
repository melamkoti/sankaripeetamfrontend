import poojaluBannerImg from "../../../assets/images/poojalu-banner.png";
export default function PoojaluComp() {
  return (
    <div>
      <div
        className="h-[100vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${poojaluBannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl tracking-wider font-semibold  z-50 text-white">
          PUJALU
        </h1>
      </div>
    </div>
  );
}
