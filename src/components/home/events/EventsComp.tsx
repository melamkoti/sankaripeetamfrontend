import { EventsData } from "./EventsData";
import calender from "../../../assets/svg/calendar.png"

function EventsComp() {
    return(
        <div className="bg-[#FFF0E3] p-12 flex flex-col justify-center items-center gap-6">

            <div className="flex flex-col gap-2 justify-center items-center">
                <p className="text-lg text-[#44233B] tracking-widest font-medium">EVENTS</p>
                <p className="text-3xl text-[#6EC1E4] font-semibold ">Upcoming Events and Workshops</p>
            </div>

            <div className="flex w-5/6 flex-col justify-center items-center gap-4">
                {EventsData.map((item, idx) => {
                    return(
                        <div key={idx} className="w-full h-full flex bg-white justify-center items-center p-4">

                            <div className="w-5/6 flex gap-8">

                            <div className="w-1/6 h-3/6">
                            <img src={item.img} alt="img" className="w-full max-h-1/6 object-cover object-center" />

                            </div>

                            <div className="4/6 flex flex-col justify-center items-start gap-4">
                            <p className="text-[#44233B] text-xl font-semibold">{item.title}</p>

                            <div className="flex gap-4">
                             <img src={calender} alt="calender" className="w-6 object-cover object-center" />
                            <p className="text-[#FD8F8F]">{item.date}</p>
                            </div>

                            </div>

                            </div>

                            <div className="w-1/6 flex justify-end">
                            <button className="bg-[#61CE70] w-3/6 rounded-full  p-2 px-4">join us</button>

                            </div>
                            
                        </div>
                    )
                })}
            </div>

            <div>
                <button className="bg-[#44233B] rounded-full w-full text-white p-3 px-6">More Events</button>
            </div>



        </div>
    )
}

export default EventsComp;