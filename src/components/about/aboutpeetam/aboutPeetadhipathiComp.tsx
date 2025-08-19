import aboutfounderimg from "../../../assets/images/image.png";

function AboutPeetadhipathiComp() {
  return (
    <div className="  w-full flex flex-col lg:flex-row items-center lg:items-start justify-start p-6  gap-8  ">
      {/* Image */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <img
          src={aboutfounderimg}
          alt="aboutfounderimg"
          className="w-full max-w-xs md:max-w-sm lg:max-w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-2/3 flex flex-col text-center  lg:text-left gap-6 ">
        {/* Telugu Name */}
        <div className="font-anek">
          <h2 className=" text-1xl md:text-2xl lg:text-[28px] font-bold text-[#004771] mb-2 ">
            బ్రహ్మశ్రీ నెమ్మికంటి నరసయ్య ఆచార్య
          </h2>
          <p className=" text-sm md:text-md lg:text-[18px] font-medium">
            వ్యవస్థాపకులు మరియు పీఠాధిపతులు
          </p>
        </div>

        {/* English Name */}
        <div>
          <h2 className=" text-1xl md:text-2xl lg:text-[32px] font-semibold text-[#004771] mb-2">
            Brahmasri Nemmikanti <br /> Narsaiah Acharya
          </h2>
          <p className=" text-md lg:text-[18px] font-normal">
            Founder and Peethadhipathi
          </p>
        </div>

        {/* Family History */}
        <div>
          <h3 className="text-2xl md:text-[20px] font-semibold text-[#004771] mb-1 text-left">
            Family History
          </h3>
          <p className="text-base md:text-[18px] leading-relaxed font-normal text-justify">
            Sri Brahmasri Nemmikanti Narasaiah Acharyulu’s family, from
            Allagadda village in Kurnool district, Andhra Pradesh, belonged to
            the Viswakarma community, known for traditional sculpture
            (Silpakala). They ran a respected sculpture school, upholding silpa
            shastra. His grandfather, a skilled goldsmith and Ayurvedic
            practitioner, provided free medical care, using pulse diagnosis and
            local herbs to treat severe conditions, even reviving comatose
            patients. His father, Sri Janaardhana Acharyulu, studied the Vedas
            in Tirupati, blending artistry with spiritual wisdom.
          </p>
        </div>

        {/* Life Journey */}
        <div>
          <h3 className="text-2xl md:text-[20px] font-semibold text-[#004771] mb-1 text-left">
            The Journey of Life
          </h3>
          <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
            Sri Brahmasri Nemmikanti Narasaiah Acharyulu’s family, from
            Allagadda village in Kurnool district, Andhra Pradesh, belonged to
            the Viswakarma community, known for traditional sculpture
            (Silpakala). They ran a respected sculpture school, upholding silpa
            shastra. His grandfather, a skilled goldsmith and Ayurvedic
            practitioner, provided free medical care, using pulse diagnosis and
            local herbs to treat severe conditions, even reviving comatose
            patients. His father, Sri Janaardhana Acharyulu, studied the Vedas
            in Tirupati, blending artistry with spiritual wisdom.
          </p>

          <h3 className="text-2xl md:text-[20px] font-semibold text-[#004771] mb-1 text-left">
            Spiritual Journey
          </h3>
          <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
            The only son of Sri Janaardhana Acharyulu and Srimati Siva Kumari,
            Narasaiah Acharyulu grew up immersed in art and spirituality.
            Alongside his academic education, he developed a deep devotion to
            Chowdeswari Devi Upasana and mastered sculpture as a sacred
            practice. This fusion of creativity and spirituality shaped him into
            a revered Sadhguru, dedicated to uplifting others through knowledge
            and service.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
            He advanced his spiritual knowledge by studying Tantrika Vidya under
            Brahmasri Kolakuri Ramakoteswararao Master Ji, gaining profound
            insights into esoteric practices. Narasaiah Acharyulu believed a
            true guru guides disciples with compassion, patience, and
            unconditional love, fostering their spiritual and emotional growth.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
            Through his holistic approach—blending sacred wisdom, disciplined
            practice, and heartfelt guidance—Narasaiah Acharyulu became a beacon
            of inspiration, leading generations of seekers toward devotion,
            self-realization, and service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPeetadhipathiComp;
