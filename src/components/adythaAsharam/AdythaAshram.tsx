import mainTempleImg from "../../assets/images/contraction.png";
import gallery1 from "../../assets/images/constraction-01.png";
import gallery2 from "../../assets/images/constraction-02.png";
import gallery3 from "../../assets/images/constraction-03.png";
import gallery4 from "../../assets/images/constraction-04.png";
import gallery5 from "../../assets/images/constraction-05.png";
import gallery6 from "../../assets/images/constraction-06.png";

function AdythaAshram() {
  const description = `Sri Brahmasri Nemmikanti Narasaiahcharyulu has shown interest in both Chowdeswari Upasana as well as sculptor. As time passed, he fully pledged his time to upasana for dieties of Chowdeswari, Lalita Parameswari, Dhakshina Kali and mastered Jyothishyam, Vastu and Mantra Shastra, thereby giving suggestions and directions for the needy people along with his students and became a Sathguru. Sri Brahmasri Nemmikanti Narasaiahcharyulu has shown interest in both Chowdeswari Upasana as well as sculptor. As time passed, he fully pledged his time to upasana for dieties of Chowdeswari, Lalita Parameswari, Dhakshina Kali and mastered Jyothishyam, Vastu and Mantra Shastra, thereby giving suggestions and directions for the needy people along with his students and became a Sathguru.Sri Brahmasri Nemmikanti Narasaiahcharyulu has shown interest in both Chowdeswari Upasana as well as sculptor. As time passed, he fully pledged his time to upasana for dieties of Chowdeswari, Lalita Parameswari, Dhakshina Kali and mastered Jyothishyam, Vastu and Mantra Shastra, thereby giving suggestions and directions for the needy people along with his students and became a Sathguru.Sri Brahmasri Nemmikanti Narasaiahcharyulu has shown interest in both Chowdeswari Upasana as well as sculptor. As time passed, he fully pledged his time to upasana for dieties of Chowdeswari, Lalita Parameswari, Dhakshina Kali and mastered Jyothishyam, Vastu and Mantra Shastra, thereby giving suggestions and directions for the needy people along with his students and became a Sathguru.Sri Brahmasri Nemmikanti Narasaiahcharyulu has shown interest in both Chowdeswari Upasana as well as sculptor. As time passed, he fully pledged his time to upasana for dieties of Chowdeswari, Lalita Parameswari, Dhakshina Kali and mastered Jyothishyam, Vastu and Mantra Shastra, thereby giving suggestions and directions for the needy people along with his students and became a Sathguru.`;

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-12 lg:px-24 pt-[80px]  main_head lg:mt-[150px]">
      {/* Header Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={mainTempleImg}
          alt="Adytha Ashram"
          className="w-full h-80 md:h-[500px] object-cover"
        />
      </div>

      {/* Title & Description */}
      <div className="mt-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Adytha Ashram
        </h1>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Gallery Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map(
          (img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )
        )}
      </div>

      {/* Bottom Paragraph */}
      <div className="mt-8">
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default AdythaAshram;
