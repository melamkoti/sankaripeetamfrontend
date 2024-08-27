import joinusmain from "../../../assets/images/joinusmain.png";
import { motion } from "framer-motion";

function JoinMain() {
  return (
    <div className="p-24 bg-[#F7F2EA] w-full flex justify-center items-center">
      <div className="w-3/6 flex flex-col items-start gap-8 px-16">
        <p className="text-5xl font-semibold tracking-wider">Join With Us</p>
        <p className="text-xl font-normal">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <motion.button whileHover={{scale: 1.09}} whileTap={{scale: 0.98}} className="bg-[#7E4555] rounded-xl p-2 px-6 text-white text-lg">
          Read More
        </motion.button>
      </div>

      <div className="w-3/6 py-">
<motion.div className="overflow-hidden rounded-3xl w-4/6 mx-auto" >

      <motion.img whileHover={{scale: 1.05}} src={joinusmain} alt="joinusmain" className="w-full rounded-3xl" />
</motion.div>
      
      </div>
    </div>
  );
}

export default JoinMain;
