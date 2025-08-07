import Boomi from "./Boomi";
import Devalaya from "./Devalayaganitham";
import JathakamCard from "./JathakamCard";

function DevalayaPage() {
  return (
    <div className="main_head lg:mt-[110px]">
      <JathakamCard  />
      <div className="flex flex-col  lg:flex-row item-center justify-center gap-8 mx-4">
        <div>
          <Devalaya />
        </div>
        <div>
          <Boomi />
        </div>
      </div>
    </div>
  );
}

export default DevalayaPage;
