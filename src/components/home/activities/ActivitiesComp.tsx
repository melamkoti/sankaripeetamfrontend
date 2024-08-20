import footerbg from "../../../assets/images/footerbg.png";
import { ActivitesData } from "./ActvitiesData";

function ActivitiesComp() {
    return(
        <div 
  className=" flex flex-col justify-start w-full  p-20 gap-12" 
  style={{
    backgroundImage: `url(${footerbg})`, 
    backgroundPosition: "center", 
    backgroundSize: "cover"
  }}
>

            <div className="flex flex-col w-1/6 justify-start items-start ">
                <p className="text-[#DB4242] text-lg font-semibold ">Activities</p>
                <p className=" text-3xl font-semibold text-white">Description</p>

            </div>

            <div className="grid grid-cols-3 text-white w-full h-full">
                {ActivitesData.map((item, idx) => {
                    const marginBottomValue = `${idx * 2}rem`;
                    return(

                        // <div></div>
                        <div key={idx} className={`flex flex-col justify-around gap-4 rounded-xl w-5/6 h-full p-4 px-6 ${item.color === "#ffffff" ? "text-[#44233B]": ""}`} style={{backgroundColor: item.color, marginBottom: marginBottomValue }}
                        >

                                <img src={item.img} alt="image" className="w-12" />
                            
                            <div>
                                <p>{item.title}</p>
                                <p>{item.content}</p>
                            </div>

                            <a href="#">Learn More &#8594;
                            </a>

                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default ActivitiesComp;

