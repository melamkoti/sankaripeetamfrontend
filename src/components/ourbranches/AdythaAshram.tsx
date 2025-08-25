import { useState } from "react";
import AdvythaAshram from "../../assets/images/advythaashramtemple.jpg";
const AdythaAshramPage = () => {
  const [activeTab, setActiveTab] = useState("activities");

  // Sample data
  const activities = [
    {
      title: "Meditation Sessions",
      description:
        "Daily guided and silent meditation sessions for inner peace",
      time: "6:00 AM, 12:00 PM, 6:00 PM",
    },
    {
      title: "Yoga Classes",
      description: "Traditional hatha yoga for all experience levels",
      time: "7:00 AM, 5:00 PM",
    },
    {
      title: "Spiritual Discourses",
      description: "Teachings from ancient scriptures and wisdom traditions",
      time: "10:00 AM",
    },
    {
      title: "Kirtan & Bhajans",
      description: "Devotional singing and chanting sessions",
      time: "7:00 PM (Tues, Thurs, Sun)",
    },
    {
      title: "Seva (Selfless Service)",
      description:
        "Opportunities to serve the community and maintain the ashram",
      time: "8:00 AM - 10:00 AM daily",
    },
  ];

  return (
    <div className=" main_head lg:mt-[140px]">
      {/* Header */}

      {/* Hero Section with Temple Image */}
      <div className="">
        <div className="flex justify-center items-center p-4 md:py-4 md:px-2 lg:px-0 max-w-[1280px] mx-auto">
          <div
            className="w-full rounded-xl bg-center bg-cover bg-no-repeat 
             h-[200px] sm:h-[300px] md:h-[500px] lg:h-[740px] relative"
            style={{
              backgroundImage: `url(${AdvythaAshram})`,
            }}
          ></div>
        </div>
       
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex border-b border-[#fdae51] mb-8">
          <button
            className={`py-2 px-6 font-medium ${
              activeTab === "activities"
                ? "text-[#d9540f] border-b-2 border-[#fdae51]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("activities")}
          >
            Activities
          </button>
          <button
            className={`py-2 px-6 font-medium ${
              activeTab === "location"
                ? "text-[#d9540f] border-b-2 border-[#fdae51]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("location")}
          >
            Location
          </button>
        </div>

        {/* Activities Section */}
        {activeTab === "activities" && (
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#d9540f] mb-2">
                  {activity.title}
                </h3>
                <p className=" mb-3">{activity.description}</p>
                <div className="flex items-center text-[#8e512c]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Location Section */}
        {activeTab === "location" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-[#d9540f] mb-4">
              Visit Us
            </h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Nestled in the foothills of the Himalayas, our ashram provides
                  a perfect environment for contemplation and spiritual
                  practice.
                </p>
                <div className="mb-4">
                  <h4 className="font-medium text-[#d9540f] mb-1">Address:</h4>
                  <p>
                    Shanti Ashram
                    <br />
                    Peace Valley Road, Rishikesh
                    <br />
                    Uttarakhand, India 249201
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#d9540f] mb-1">Contact:</h4>
                  <p>
                    Email: turst.sspc@gmail.com
                    <br />
                    Phone: +91 9989492655
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-80 bg-gray-200 rounded-lg overflow-hidden">
                {/* Embedded Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110518.9790291847!2d78.20843342292236!3d30.08646835658913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e67cf93f111%3A0x5b93886e3c0b4a3e!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1679995173582!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ashram Location"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </main>

     
    </div>
  );
};

export default AdythaAshramPage;
