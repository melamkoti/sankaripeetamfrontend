import ActivitiesComp from "./activitiespage/ActivitiesComp";
import { Outlet } from "react-router-dom";
export default function Activities() {
  return (
    <div>
      <ActivitiesComp />
      <Outlet />
    </div>
  );
}
