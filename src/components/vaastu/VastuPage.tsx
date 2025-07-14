import Boomi from "./Boomi";
import Jathakam from "./Jahtakam";
import JathakamCard from "./JathakamCard";

function VastuPage() {
  return (
    <div>
      <JathakamCard />
      <div className="flex flex-col  lg:flex-row item-center justify-center gap-8">
        <div>
          <Jathakam />
        </div>
        <div>
          <Boomi />
        </div>
      </div>
    </div>
  );
}

export default VastuPage;
