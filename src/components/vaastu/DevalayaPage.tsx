import Boomi from "./Boomi";
import Devalaya from "./Devalayaganitham";
import JathakamCard from "./JathakamCard";

function DevalayaPage() {
  return (
    <>
      <JathakamCard bhumi={false} />
      <div className="flex flex-col  lg:flex-row item-center justify-center gap-8">
        <div>
          <Devalaya />
        </div>
        <div>
          <Boomi />
        </div>
      </div>
    </>
  );
}

export default DevalayaPage;
