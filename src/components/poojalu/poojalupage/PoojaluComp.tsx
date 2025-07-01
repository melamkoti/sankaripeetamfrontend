import poojaluBannerImg from "../../../assets/images/poojalu-banner.png";

import { useState } from "react";

type PoojaType = {
  title: string;
  description: string | string[];
  isBulletPoints?: boolean;
};

type PoojaluCategory = {
  title: string;
  poojas: PoojaType[];
  showNote?: boolean;
};

const PoojaluComp = () => {
  const [activeTab, setActiveTab] = useState<"daily" | "monthly" | "yearly">(
    "daily"
  );

  const poojaluData: Record<"daily" | "monthly" | "yearly", PoojaluCategory> = {
    daily: {
      title: "Daily Poojalu",
      poojas: [
        {
          title: "Archana",
          description:
            "Archana will be performed at Dakshina Kaali temple, Lalithamba temple, Dakshinamurtiyi temple and ashta bhairava temple. Nrusimha swamy and Chowdeshwari temples.",
        },
        {
          title: "Abhishekam",
          description:
            "Abishekham will be performed for Maha Meru Yantram, Siddha Kaali Yantram at temple Mandapam.",
        },
        {
          title: "Kumkuma Archana",
          description:
            "Kumkuma Archana will be performed for Maha Meru Yantram, Siddha Kaali Yantram at temple Mandapam thrice in a day.",
        },
        {
          title: "Homam",
          description:
            "Pancha Brahma, Pancha Sakthi, Nava graha, Dikpaalaka, Ashta Bhairava, Dakshinamurthy, Dakshina Kaali, Lalithamba, Rudra Homams will be performed  at Yaaga Saala.",
        },
        {
          title: "Parayana",
          description:
            "Lalitha, Dakshina Kaali, Chandi Saptasati and other devi devatha parayanas will be performed at temple mandapam.",
        },
        {
          title: "Naama Nakshathra Pooja",
          description:
            "Poojas related to the name and birth star will be performed.",
        },
      ],
      showNote: true,
    },
    monthly: {
      title: "Monthly Poojalu",
      poojas: [
        {
          title: "Vishesha Abhishekam",
          description: [
            "Vishesha Abhishekam for Dakshina Kaali will be performed on early morning Amaavasya day.",
            "Vishesha Abhishekam for Lalithamba will be performed on early morning Pournami day.",
            "Vishesha Abhishekam for Ashta Bhairava will be performed on early morning Bahula Ashtami day.",
            "Vishesha Abhishekam for Dakshinamurthy will be performed on early morning Bahula Chaturdasi day.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Laksha Kumkuma Archana",
          description: [
            "Laksha Kumkuma Archana will be performed with Kaali Sahasra Naama, Lalitha Sahasra Naama, Lakshmi Sahasra Naama stotras for Maha meru Yantram, Siddha Kaali Yantram at temple Mandapam.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Chandi Homam",
          description: [
            "Chandi Homam will be performed on Sukla Dashami Day at Yaaga Saala.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Satha Kooshmanda Bali",
          description: [
            "Satha Kooshmanda bali will be performed on Amaavasya and Pournami night at the temple closure time.",
          ],
          isBulletPoints: true,
        },
      ],
    },
    yearly: {
      title: "Yearly Poojalu",
      poojas: [
        {
          title: "Dhakshina Kaali Janmathidhi Vishesha Pooja",
          description: [
            " Dhakshina Kaali Janmathidhi Vishesha Pooja will be performed on Aswija Bahula Ashtami at 6:30 PM in Yaaga Saala.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Taaraadevi Janmathidhi Vishesha Pooja",
          description: [
            "Taaraadevi Janmathidhi Vishesha Pooja will be performed on Chaitra Sukla Navami at 6:30 PM in Yaaga Saala.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Shodashi Janmathidhi Vishesha Pooja",
          description: [
            "Shodashi Janmathidhi Vishesha Pooja will be performed on Margasira Pournami at 6:30 PM in Yaaga Saala.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Bhuvaneshwari Janmathidhi Vishesha Pooja",
          description: [
            "Bhuvaneshwari Janmathidhi Vishesha Pooja will be performed on Badrapada Sukla Ashtami at 6:30 PM in Yaaga Saala.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Tripura Bhairavi Janmathidhi Vishesha Pooja",
          description: [
            "Tripura Bhairavi Janmathidhi Vishesha Pooja will be performed on Maagha Pournami at 6:30 PM in Yaaga Saala.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Chinna Mastha Janmathidhi Vishesha Pooja",
          description: [
            "Chinna Mastha Janmathidhi Vishesha Pooja will be performed on Vaisakha Sukla Chaturdasi at 6:30 PM in Yaaga Saala",
          ],
          isBulletPoints: true,
        },
        {
          title: "Dhoomavathi Janmathidhi Vishesha Pooja",
          description: [
            "Dhoomavathi Janmathidhi Vishesha Pooja will be performed on Jyeshta Sukla Ashtami at 6:30 PM in Yaaga Saala",
          ],
          isBulletPoints: true,
        },
        {
          title: "Bhagalamukhi Janmatidhi Vishesha Pooja",
          description: [
            "Bhagalamukhi Janmathidhi Vishesha Pooja will be performed Vaisakha Sukla Ashtami at 6:30 PM in Yaaga Saala.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Maathangeshwari Janmathidhi Vishesha Pooja",
          description: [
            "Maathangeshwari  Janmathidhi Vishesha Pooja will be performed Vaisakha Sukla Tadiya at 6:30 PM in Yaaga Saala.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Kamalathmika Janmathidhi Vishesha Pooja",
          description: [
            "Kamalathmika Janmathidhi Vishesha Pooja will be performed MarghaSira Amaavasya at 6:30 PM in Yaaga Saala.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Mahaa Shivaratri Vishesha Pooja",
          description: [
            "Mahaa Shivaratri Vishesha Pooja will be performed Magha Bahula Chaturdasi  from 6:30 PM to 1:30 AM in the temple premises.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Chowdeshwari Janmathidhi Vishesha Pooja",
          description: [
            "Will be performed on Ashada Amavasya from morning 6:00 AM onwards and Agni harati(Dishti) will be performed at midnight in Ashram premises.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Nrusimha Swamy Janmathidhi Vishesha Pooja",
          description: [
            "Will be performed on Shravana Maasa Swati Nakshatra day in temple premises.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Makara Sankranthi Vishesha Pooja",
          description: [
            "Will be performed on the day when Sun Enters into Capricorn jodiac sign(Approximately January 12th – 17th).",
          ],
          isBulletPoints: true,
        },
        {
          title: "Karkataka Sankrathi Vishesha Pooja",
          description: [
            "Will be performed on the day when Sun Enters into Cancer jodiac sign(Approximately July 12th – 17th).",
          ],
          isBulletPoints: true,
        },
        {
          title: "Ganesha Chaturthi Vishesha Pooja",
          description: [
            "Will be performed on Bhadrapada Sukla Chaturthi in the morning from 6:00 AM onwards at temple premises.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Subhrahamanya Shasti Vishesha Pooja",
          description: [
            "Will be performed in Margasira Sukla Sashti in the morning from 6:00 AM onwards at temple premises.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Kaalabhairava Ashtami Vishesha Pooja",
          description: [
            "Will be performed in Margasira Sukla Ashtami in the morning from 6:00 AM onwards at temple premises.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Krishna Ashthami Vishesha Pooja",
          description: [
            "Will be performed in Shravana Bahula Ashtami in the morning 6:00 AM onwards and Mid night at temple premises.",
          ],
          isBulletPoints: true,
        },
        {
          title: "Ugadi Vishesha Pooja and Panchanga Shravanam",
          description: [
            "Will be performed on Chaitra Sukla Padyami for the entire day at temple premises.",
          ],
          isBulletPoints: true,
        },
      ],
    },
  };

  const renderDescription = (
    description: string | string[],
    isBulletPoints?: boolean
  ) => {
    if (Array.isArray(description)) {
      return (
        <ul className={`${isBulletPoints ? "list-disc pl-5" : ""} space-y-1`}>
          {description.map((item, i) => (
            <li key={i} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-gray-700">{description}</p>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 py-8 px-4">
      <div
        className="h-[100vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${poojaluBannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl tracking-wider font-semibold  z-50 text-white">
          ASHRAMA PUJALU
        </h1>
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-800 mb-8">
          Temple Poojalu
        </h1>

        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setActiveTab("daily")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "daily"
                ? "bg-orange-600 text-white shadow-md"
                : "bg-white text-orange-700 hover:bg-orange-100"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setActiveTab("monthly")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "monthly"
                ? "bg-orange-600 text-white shadow-md"
                : "bg-white text-orange-700 hover:bg-orange-100"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setActiveTab("yearly")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "yearly"
                ? "bg-orange-600 text-white shadow-md"
                : "bg-white text-orange-700 hover:bg-orange-100"
            }`}
          >
            Yearly
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-orange-700 mb-6 border-b pb-2">
              {poojaluData[activeTab].title}
            </h2>

            <div className="space-y-6">
              {poojaluData[activeTab].poojas.map((pooja, index) => (
                <div
                  key={index}
                  className="bg-amber-50 p-5 rounded-lg border-l-4 border-orange-500"
                >
                  <h3 className="text-xl font-medium text-orange-800 mb-2">
                    {pooja.title}
                  </h3>
                  <p className="text-gray-700">
                    {" "}
                    {renderDescription(pooja.description, pooja.isBulletPoints)}
                  </p>
                </div>
              ))}
            </div>
            {poojaluData[activeTab].showNote && (
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-yellow-800 italic">
                  Note: Daily Pooja procedures might be changed without prior
                  notice. Devotees are requested to contact the ashram
                  volunteers/staff in case of any clarifications.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoojaluComp;
