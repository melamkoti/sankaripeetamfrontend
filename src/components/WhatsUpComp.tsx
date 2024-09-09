import ImageLogo from "../assets/images/whatsup-logo.png";
export default function WhatsUpComp() {
  return (
    <div className=" fixed bottom-0 right-0 p-3  z-50 ">
      <a
        href="https://wa.me/8106442677?text=Hello How Can i help you ?"
        target="_blank"
      >
        <img src={ImageLogo} width="60" className="rounded-full" />
      </a>
    </div>
  );
}
