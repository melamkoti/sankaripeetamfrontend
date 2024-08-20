import { OurGoalsData } from "./OurGoalsData";
import founder from "../../../assets/images/founder.png"

function OurGoalsPage() {
    return(
        <div className="w-full flex justify-center items-center p-16 ">
           

            <div className="w-1/2 flex flex-col justify-around items-center gap-8 ">

            <div className="flex flex-col justify-center items-start">
               <p className="text-xl font-semibold">About Me</p>
               <p className="text-sm font-normal">{OurGoalsData[0].ourgoalscontent}</p>
            </div>

            <div className="flex flex-col justify-center items-start">
               <p className="text-xl font-semibold">My Ashramam</p>
               <p className="text-sm font-normal">{OurGoalsData[0].MissionsTowardsSocietycontent}</p>

            </div>

            </div>

            <div className="w-1/2 flex justify-center items-center">
                <img src={founder} alt="founder" className="w-4/6 object-cover object-center" />

            </div>

        </div>
    )
}

export default OurGoalsPage;