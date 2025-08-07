import { useState } from "react";
import { NavLink } from "react-router-dom";
const Jathakam = () => {
  const [padam, setPadam] = useState(0);
  const [ayam, setAyam] = useState(0);
  const [ayamText, setAyamText] = useState("");
  const [nakshatram, setNakshatram] = useState(0);
  const [nakshatramText, setNakshatramText] = useState("");
  const [varamu, setVaramu] = useState(0);
  const [varamText, setVaramText] = useState("");
  const [thedhi, setThedhi] = useState(0);
  const [thedhiText, setThedhiText] = useState("");
  const [yogam, setYogam] = useState(0);
  const [yogamText, setYogamText] = useState("");
  const [danam, setDanam] = useState(0);
  const [danamText, setDanamText] = useState("");
  const [runam, setRunam] = useState(0);
  const [runamText, setRunamText] = useState("");
  const [amsa, setAmsa] = useState(0);
  const [amsaText, setAmsaText] = useState("");
  const [age, setAge] = useState(0);
  const handlePadamChange = (e: any) => {
    const value = e.target.value;
    setPadam(value);

    if (value) {
      const padamValue = parseInt(value);

      // Calculate Ayam (9/8)
      const ayamValue = (padamValue * 9) % 8;
      const adjestableAyam = ayamValue === 0 ? 8 : ayamValue;
      const selectedAyamDays = AyamSegments.find(
        (day) => day.id === adjestableAyam
      );
      setAyam(ayamValue);
      setAyamText(selectedAyamDays ? selectedAyamDays.ayam : " ");

      // Calculate Nakshatram (8/27)
      const nakshatramValue = (padamValue * 8) % 27;
      const adjustableValue = nakshatramValue === 0 ? 27 : nakshatramValue;

      const selectedNakshatrams = NakshatrasSegments.find(
        (star) => star.id === adjustableValue
      );

      setNakshatramText(
        selectedNakshatrams ? selectedNakshatrams.Nakshatras : " "
      );

      setNakshatram(nakshatramValue);

      // calculate varamu
      const varamuValue = (padamValue * 9) % 7;
      const adjustedVaramuValue = varamuValue === 0 ? 7 : varamuValue;

      const selectedWeekDay = WeekDays.find(
        (day) => day.id === adjustedVaramuValue
      );
      setVaramu(adjustedVaramuValue);
      setVaramText(selectedWeekDay ? selectedWeekDay.varam : "");
      // calculate Thedhi
      const ThedhiValue = (padamValue * 8) % 15;
      const adjustedThedhiValue = ThedhiValue === 0 ? 15 : ThedhiValue;
      const selectedThedhiDay = ThedhiSegments.find(
        (thedhi) => thedhi.id === adjustedThedhiValue
      );

      setThedhi(adjustedThedhiValue);
      setThedhiText(selectedThedhiDay ? selectedThedhiDay.thedhi : " ");
      // calculate yogam
      const yogamvalue = (padamValue * 4) % 27;
      const adjustadYogamValue = yogamvalue === 0 ? 27 : yogamvalue;
      const seletedYogam = YogamSegments.find(
        (yogam) => yogam.id === adjustadYogamValue
      );
      setYogam(adjustadYogamValue);
      setYogamText(seletedYogam ? seletedYogam.yogam : " ");
      // calculate danam
      const danamValue = (padamValue * 5) % 12;
      const adjustedDanamValue = danamValue === 0 ? 12 : danamValue;
      const selectedDanamValue = DanamSegments.find(
        (danam) => danam.id === adjustedDanamValue
      );
      setDanam(adjustedDanamValue);
      setDanamText(selectedDanamValue ? selectedDanamValue.danam : " ");
      // calculate runam
      const RunamValue = (padamValue * 3) % 8;
      const adjuctRunamValue = RunamValue === 0 ? 8 : RunamValue;
      const selectedRunamValue = RunamSegments.find(
        (runam) => runam.id === adjuctRunamValue
      );
      setRunam(adjuctRunamValue);
      setRunamText(selectedRunamValue ? selectedRunamValue.runam : " ");
      // calculate amsa
      const amsaValue = (padamValue * 7) % 9;
      const adjuctedAmsaValue = amsaValue === 0 ? 9 : amsaValue;
      const selectedAmsaValue = AmsaSegments.find(
        (amsa) => amsa.id === adjuctedAmsaValue
      );
      setAmsa(adjuctedAmsaValue);
      setAmsaText(selectedAmsaValue ? selectedAmsaValue.amsa : " ");
      // calculate the age
      const ageValue = (padamValue * 8) % 120;
      const adjustableAgeValue = ageValue === 0 ? 120 : ageValue;
      setAge(adjustableAgeValue);
    } else {
      setAyam(0);
      setAyamText("");
      setNakshatram(0);
      setNakshatramText("");
      setVaramu(0);
      setVaramText("");
      setThedhi(0);
      setThedhiText("");
      setDanam(0);
      setDanamText("");
      setRunam(0);
      setRunamText("");
      setAge(0);
    }
  };
  // segments
  const WeekDays = [
    {
      id: 1,
      varam: "ఆదివారం",
    },
    {
      id: 2,
      varam: "సోమవారం",
    },
    {
      id: 3,
      varam: "మంగళవారం",
    },
    {
      id: 4,
      varam: "బుధవారం",
    },
    {
      id: 5,
      varam: "గురువారం",
    },
    {
      id: 6,
      varam: "శుక్రవారం",
    },
    {
      id: 7,
      varam: "శనివారం",
    },
  ];
  const AyamSegments = [
    {
      id: 1,
      ayam: "ధ్వజాయము",
    },
    {
      id: 2,
      ayam: "ధూమాయము",
    },
    {
      id: 3,
      ayam: "సింహాయము",
    },
    {
      id: 4,
      ayam: "శ్వానాయము",
    },
    {
      id: 5,
      ayam: "వృషభాయము",
    },
    {
      id: 6,
      ayam: "ఖరాయము",
    },
    {
      id: 7,
      ayam: "గజాయము",
    },
    {
      id: 8,
      ayam: "కాకాయము",
    },
  ];
  const NakshatrasSegments = [
    {
      id: 1,
      Nakshatras: "అశ్విని",
    },
    {
      id: 2,
      Nakshatras: "భరణి",
    },
    {
      id: 3,
      Nakshatras: "కృత్తిక",
    },
    {
      id: 4,
      Nakshatras: "రోహిణి",
    },
    {
      id: 5,
      Nakshatras: "మృగశిర",
    },
    {
      id: 6,
      Nakshatras: "అర్ధ్ర",
    },
    {
      id: 7,
      Nakshatras: "పునర్వసు",
    },
    {
      id: 8,
      Nakshatras: "పుష్యమి",
    },
    {
      id: 9,
      Nakshatras: "ఆశ్లేష",
    },
    {
      id: 10,
      Nakshatras: "మఖ",
    },
    {
      id: 11,
      Nakshatras: "పూర్వ ఫల్గుని",
    },
    {
      id: 12,
      Nakshatras: "ఉత్తర ఫల్గుని",
    },
    {
      id: 13,
      Nakshatras: "హస్త",
    },
    {
      id: 14,
      Nakshatras: "చిత్ర",
    },
    {
      id: 15,
      Nakshatras: "స్వాతి",
    },
    {
      id: 16,
      Nakshatras: "విశాఖ",
    },
    {
      id: 17,
      Nakshatras: "అనురాధ",
    },
    {
      id: 18,
      Nakshatras: "జ్యేష్ట",
    },
    {
      id: 19,
      Nakshatras: "మూల",
    },
    {
      id: 20,
      Nakshatras: "పూర్వాషాఢ",
    },
    {
      id: 21,
      Nakshatras: "ఉత్తరాషాఢ",
    },
    {
      id: 22,
      Nakshatras: "శ్రవణం",
    },
    {
      id: 23,
      Nakshatras: "ధనిష్ఠ",
    },
    {
      id: 24,
      Nakshatras: "శతభిషం",
    },
    {
      id: 25,
      Nakshatras: "పూర్వాభాద్ర",
    },
    {
      id: 26,
      Nakshatras: "ఉత్తరాభాద్ర",
    },
    {
      id: 27,
      Nakshatras: "రేవతి",
    },
  ];
  const ThedhiSegments = [
    {
      id: 1,
      thedhi: "పాడ్యమి",
    },
    {
      id: 2,
      thedhi: "విదియ",
    },
    {
      id: 3,
      thedhi: "తదియ",
    },
    {
      id: 4,
      thedhi: "చవితి",
    },
    {
      id: 5,
      thedhi: "పంచమి",
    },
    {
      id: 6,
      thedhi: "షష్ఠి",
    },
    {
      id: 7,
      thedhi: "సప్తమి",
    },
    {
      id: 8,
      thedhi: "అష్టమి",
    },
    {
      id: 9,
      thedhi: "నవమి",
    },
    {
      id: 10,
      thedhi: "దశమి",
    },
    {
      id: 11,
      thedhi: "ఏకాదశి",
    },
    {
      id: 12,
      thedhi: "ద్వాదశి",
    },
    {
      id: 13,
      thedhi: "త్రయోదశి",
    },
    {
      id: 14,
      thedhi: "చతుర్దశి",
    },
    {
      id: 15,
      thedhi: "పౌర్ణమి/అమావాస్య",
    },
  ];
  const YogamSegments = [
    {
      id: 1,
      yogam: "విష్కంభం",
    },
    {
      id: 2,
      yogam: "ప్రీతి",
    },
    {
      id: 3,
      yogam: "ఆయుష్మాన్",
    },
    {
      id: 4,
      yogam: "సౌభాగ్య",
    },
    {
      id: 5,
      yogam: "శోభన",
    },
    {
      id: 6,
      yogam: "అతిగండ",
    },
    {
      id: 7,
      yogam: "సుకర్మ ",
    },
    {
      id: 8,
      yogam: "ధృతి",
    },
    {
      id: 9,
      yogam: "శూలము",
    },
    {
      id: 10,
      yogam: "గండము ",
    },
    {
      id: 11,
      yogam: "వృద్ది ",
    },
    {
      id: 12,
      yogam: "ధృవం",
    },
    {
      id: 13,
      yogam: "వ్యాఘాతం",
    },
    {
      id: 14,
      yogam: "హర్షణం",
    },
    {
      id: 15,
      yogam: "వజ్రము",
    },
    {
      id: 16,
      yogam: "సిద్ధి",
    },
    {
      id: 17,
      yogam: "వ్యతీపాత",
    },
    {
      id: 18,
      yogam: "వరీయాన్",
    },
    {
      id: 19,
      yogam: "పరిషు",
    },
    {
      id: 20,
      yogam: "శివము ",
    },
    {
      id: 21,
      yogam: "సిద్దం ",
    },
    {
      id: 22,
      yogam: "సాధ్యం",
    },
    {
      id: 23,
      yogam: "శుభం",
    },
    {
      id: 24,
      yogam: "శుభ్రము",
    },
    {
      id: 25,
      yogam: "బ్రాహ్మమ్",
    },
    {
      id: 26,
      yogam: "ఐంద్రం ",
    },
    {
      id: 27,
      yogam: "వైధృతి",
    },
  ];
  const DanamSegments = [
    {
      id: 1,
      danam: "వస్త్రములు",
    },
    {
      id: 2,
      danam: "శస్త్రములు",
    },
    {
      id: 3,
      danam: "పుస్తకములు",
    },
    {
      id: 4,
      danam: "ద్రవ్యములు",
    },
    {
      id: 5,
      danam: "ధాన్యములు",
    },
    {
      id: 6,
      danam: "భూములు",
    },
    {
      id: 7,
      danam: "కుటుంబము",
    },
    {
      id: 8,
      danam: "విద్య",
    },
    {
      id: 9,
      danam: "పశువులు",
    },
    {
      id: 10,
      danam: "తోటలు",
    },
    {
      id: 11,
      danam: "భాండములు",
    },
    {
      id: 12,
      danam: "భూషణములు",
    },
  ];
  const RunamSegments = [
    {
      id: 1,
      runam: "శుభం",
    },
    {
      id: 2,
      runam: "శుభం",
    },
    {
      id: 3,
      runam: "శుభం",
    },
    {
      id: 4,
      runam: "శుభం",
    },
    {
      id: 5,
      runam: "శుభం",
    },
    {
      id: 6,
      runam: "శుభం",
    },
    {
      id: 7,
      runam: "శుభం",
    },
    {
      id: 8,
      runam: "శుభం",
    },
  ];
  const AmsaSegments = [
    {
      id: 1,
      amsa: "తస్కరాంశ",
    },
    {
      id: 2,
      amsa: "భుక్త్యంశ",
    },
    {
      id: 3,
      amsa: "శక్త్యంశ",
    },
    
    {
      id: 4,
      amsa: "ధనాంశ",
    },
    {
      id: 5,
      amsa: "రాజాంశ",
    },
    {
      id: 6,
      amsa: "చలాంశ",
    },
    {
      id: 7,
      amsa: "నిర్భయాంశ ",
    },
    {
      id: 8,
      amsa: "నిధనాంశ ",
    },
     {
      id: 9,
      amsa: "క్లేశాంశ",
    },
  ];
  return (
    <div className=" my-12 max-w-2xl mx-auto  rounded-md ">
      <div className=" flex justify-end  p-4 ">
       <div className="flex justify-end  rounded-md gap-4 text-lg  md:text-[20px]">
          <NavLink
            to="/vastu"
            className={({ isActive }) =>
              isActive
                 ? " p-3 text-[#D9540F] border-b-4 border-[#D9540F] font-semibold"
                : "  p-3 text-[#7D7D7D] border-b-2 border-[#7D7D7D] font-semibold"
            }
          >
            <p>గృహ గణితం</p>
          </NavLink>
          <NavLink
            to="/devalaya"
            className={({ isActive }) =>
              isActive
                ? " p-3 text-[#D9540F] border-b-4 border-[#D9540F] font-semibold"
                : "  p-3 text-[#7D7D7D] border-b-2 border-[#7D7D7D] font-semibold"
            }
          >
            <p>దేవాలయ గణితం</p>
          </NavLink>
        </div>
      </div>
      <div className="max-w-2xl mx-auto md:p-6 p-2 bg-white shadow-md rounded-lg ">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            ఆయాది పదం :
          </label>
          <input
            type="number"
            value={padam}
            onChange={handlePadamChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center mb-4">
          <label className="w-1/4 text-gray-700 font-medium">ఆయము :</label>
          <input
            type="text"
            value={ayam}
            disabled
            className="w-1/4 p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="text"
            value={ayamText}
            disabled
            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-gray-700 font-medium">నక్షత్రము :</label>
          <input
            type="text"
            value={nakshatram}
            disabled
            className="w-1/4 p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="text"
            value={nakshatramText}
            disabled
            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-gray-700 font-medium">వారము :</label>
          <input
            type="text"
            value={varamu}
            disabled
            className="w-1/4 p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="text"
            disabled
            value={varamText}
            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-gray-700 font-medium">తిథి :</label>
          <input
            type="text"
            value={thedhi}
            disabled
            className="w-1/4 p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="text"
            disabled
            value={thedhiText}
            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-gray-700 font-medium">యోగం :</label>
          <input
            type="text"
            value={yogam}
            disabled
            className="w-1/4 p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="text"
            disabled
            value={yogamText}
            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-gray-700 font-medium">ధనము :</label>
          <input
            type="text"
            value={danam}
            disabled
            className="w-1/4 p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="text"
            disabled
            value={danamText}
            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-gray-700 font-medium">రుణము :</label>
          <input
            type="text"
            value={runam}
            disabled
            className="w-1/4 p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="text"
            disabled
            value={runamText}
            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-gray-700 font-medium">అంశ :</label>
          <input
            type="text"
            value={amsa}
            disabled
            className="w-1/4 p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="text"
            disabled
            value={amsaText}
            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="w-1/4 text-gray-700 font-medium">ఆయుస్సు :</label>
          <input
            type="text"
            value={age}
            disabled
            className="w-1/4 p-2 border border-gray-300 rounded bg-gray-100"
          />
          <input
            type="text"
            disabled
            value={age}
            className="w-1/2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Jathakam;
