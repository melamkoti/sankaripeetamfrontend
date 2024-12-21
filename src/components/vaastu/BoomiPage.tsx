import Boomi from "./Boomi";
import JathakamCard from "./JathakamCard";

function BoomiPage() {
  return (
    <div className="main_head ">
      <JathakamCard  bhumi={true}/>
      <Boomi />
    </div>
  );
}

export default BoomiPage;
