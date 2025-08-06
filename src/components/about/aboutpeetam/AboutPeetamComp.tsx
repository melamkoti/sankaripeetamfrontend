import aboutfounderimg from "../../../assets/images/footer-logo.svg";

function AboutPeetamComp() {
  return (
    <div className="bg-[#E9E5DF] p-4  md:p-12 ">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Logo */}
        <div className="flex justify-center ">
          <img
            src={aboutfounderimg} // Replace with your actual logo path
            alt="Sanathana Sankari Peetam"
            className="w-60 h-60 object-contain"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <h2 className="text-[#0064A4] text-2xl font-semibold md:text-[32px]">
            Sanathana Sankari Peetam
          </h2>
          <p className=" italic mb-4 md:text-[20px] font-normal">
            Abhayam – Vijayam
          </p>

          <div
            className="space-y-4 font-normal
 leading-relaxed text-justify md:text-[18px]"
          >
            <p>
              Sri Brahmasri Nemmkinti Narasaiahacharyulu has shown interest in
              both Chowdeswari Upasana as well as sculptor. As time passed, he
              fully pledged his time to upasana for deities of Chowdeswari,
              Lalitha Parameswari, Dakshina Kali and mastered Jyothisyam, Vastu
              and Mantra Shastra, thereby giving suggestions and directions for
              the needy people along with his students and became a Sathguru.
            </p>

            <p>
              Sri Brahmasri Nemmkinti Narasaiah Acharyulu's family, from
              Allagadla village in Kurnool district, Andhra Pradesh, belonged to
              the Viswakarma community, known for traditional sculpture
              (Silpakala). They ran a respected sculpture school, upholding
              silpa shastras. His grandfather, a skilled goldsmith and Ayurvedic
              practitioner, provided free medical care, using pulse diagnosis
              and local herbs to treat severe conditions, even reviving comatose
              patients. His father, Sri Janardhana Acharyulu, studied the Vedas
              in Tirupati, blending artistry with spiritual wisdom.
            </p>

            <p>
              The only son of Sri Janardhana Acharyulu and Srimati Siva Kumari,
              Narasaiah Acharyulu grew up immersed in art and spirituality.
              Alongside his academic education, he developed a deep devotion to
              Chowdeswari Devi Upasana and mastered sculpture as a sacred
              practice. This fusion of creativity and spirituality shaped him
              into a revered Sadhguru, dedicated to uplifting others through
              knowledge and service.
            </p>

            <p>
              He advanced his spiritual knowledge by studying Tantrika Vidya
              under Brahmasri Kolakuri Ramakoteswararao Master Ji, gaining
              profound insights into esoteric practices. Narasaiah Acharyulu
              believed a true guru guides disciples with compassion, patience,
              and unconditional love, fostering their spiritual and emotional
              growth.
            </p>

            <p>
              Through his holistic approach—blending sacred wisdom, disciplined
              practice, and heartfelt guidance—Narasaiah Acharyulu became a
              beacon of inspiration, leading generations of seekers toward
              devotion, self-realization, and service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPeetamComp;
