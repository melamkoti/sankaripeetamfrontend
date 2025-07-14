import aboutfounderimg from "../../../assets/images/image.png";

function AboutPeetamComp() {
  return (
    <div className="w-full lg:h-full flex flex-col lg:flex-row justify-start items-center p-6 md:p-12 lg:p-0 gap-4 md:gap-12 lg:gap-0 ">
      <div className="w-3/6 md:max-w-1/6 lg:h-full">
        <img
          src={aboutfounderimg}
          alt="aboutfounderimg"
          className="w-full lg:max-w-3/6  "
        />
      </div>

      <div className="lg:w-3/6 h-full flex flex-col justify-around items-center p-2 text-base gap-6 md:text-center text-justify md:text-justify   text-[#000]">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-orange-700 mb-8">
        Biography of Sri Brahmasri Nemmikanti Narasaiah Acharyulu
      </h2>

      {/* Family History */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-red-700 mb-3">Family History</h3>
        <p className="text-base md:text-lg leading-relaxed">
          Sri Brahmasri Nemmikanti Narasaiah Acharyulu’s family, from Allagadda village
          in Kurnool district, Andhra Pradesh, belonged to the Viswakarma community,
          known for traditional sculpture (Silpakala). They ran a respected sculpture
          school, upholding silpa shastra. His grandfather, a skilled goldsmith and
          Ayurvedic practitioner, provided free medical care, using pulse diagnosis and
          local herbs to treat severe conditions, even reviving comatose patients. His
          father, Sri Janaardhana Acharyulu, studied the Vedas in Tirupati, blending
          artistry with spiritual wisdom.
        </p>
      </div>

      {/* Life and Spiritual Journey */}
      <div>
        <h3 className="text-2xl font-semibold text-red-700 mb-3">Life and Spiritual Journey</h3>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          The only son of Sri Janaardhana Acharyulu and Srimati Siva Kumari, Narasaiah
          Acharyulu grew up immersed in art and spirituality. Alongside his academic
          education, he developed a deep devotion to Chowdeswari Devi Upasana and
          mastered sculpture as a sacred practice. This fusion of creativity and
          spirituality shaped him into a revered Sadhguru, dedicated to uplifting others
          through knowledge and service.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          He advanced his spiritual knowledge by studying Tantrika Vidya under Brahmasri
          Kolakuri Ramakoteswararao Master Ji, gaining profound insights into esoteric
          practices. Narasaiah Acharyulu believed a true guru guides disciples with
          compassion, patience, and unconditional love, fostering their spiritual and
          emotional growth.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Through his holistic approach—blending sacred wisdom, disciplined practice, and
          heartfelt guidance—Narasaiah Acharyulu became a beacon of inspiration, leading
          generations of seekers toward devotion, self-realization, and service.
        </p>
      </div>
      </div>
    </div>
  );
}

export default AboutPeetamComp;
