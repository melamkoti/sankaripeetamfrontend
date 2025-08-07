import Boomi from "./Boomi";
import Jathakam from "./Jahtakam";
import JathakamCard from "./JathakamCard";

function VastuPage() {
  return (
    <div className="main_head lg:mt-[110px]">
      <JathakamCard />
      <div className="flex flex-col  lg:flex-row item-center justify-center gap-8 mx-4">
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
