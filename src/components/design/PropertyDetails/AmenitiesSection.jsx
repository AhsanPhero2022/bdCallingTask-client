import power from "../../../assets/images/power.png";
import lift from "../../../assets/images/lift.png";
import club from "../../../assets/images/clubHouse.png";
import gymnasium from "../../../assets/images/gym.png";
import park from "../../../assets/images/park.png";
import reservedParking from "../../../assets/images/parking.png";
import security from "../../../assets/images/securities.png";
import water from "../../../assets/images/water.png";
import privateGarden from "../../../assets/images/privateGarden.png";
import vaastuCompliant from "../../../assets/images/vaastuCompliant.png";
import ServiceGoodsLift from "../../../assets/images/ServiceGoodsLift.png";
import VisitorParking from "../../../assets/images/VisitorParking.png";

import intercom from "../../../assets/images/intercom.png";
import maintenance from "../../../assets/images/maintenance.png";
import waste from "../../../assets/images/waste.png";
import laundry from "../../../assets/images/laundry.png";
import internet from "../../../assets/images/internet.png";
import dthTelevision from "../../../assets/images/dthTelevision.png";
import pipegas from "../../../assets/images/Pipegas.png";
import jogging from "../../../assets/images/jogging.png";
import outdoor from "../../../assets/images/outdoor.png";
import earlyLearning from "../../../assets/images/earlyLearning.png";
import kidsPlay from "../../../assets/images/kidsPlay.png";
import indoor from "../../../assets/images/indoor.png";

const amenitiesList = [
  { name: "Power Back Up", icon: power },
  { name: "Lift", icon: lift },
  { name: "Club House", icon: club },
  { name: "Gymnasium", icon: gymnasium },
  { name: "Park", icon: park },
  { name: "Reserved Parking", icon: reservedParking },
  { name: "Security", icon: security },
  { name: "Water Storage", icon: water },
  { name: "Private Terrace/Garden", icon: privateGarden },
  { name: "Vaastu Compliant", icon: vaastuCompliant },
  { name: "Service/Goods Lift", icon: ServiceGoodsLift },
  { name: "Visitor Parking", icon: VisitorParking },
  { name: "Intercom Facility", icon: intercom },
  { name: "Maintenance Staff", icon: maintenance },
  { name: "Waste Disposal", icon: waste },
  { name: "Laundry Service", icon: laundry },
  { name: "Internet/Wi-Fi Connectivity", icon: internet },
  { name: "DTH Television Facility", icon: dthTelevision },
  { name: "Piped Gas", icon: pipegas },
  { name: "Jogging and Strolling Track", icon: jogging },
  { name: "Outdoor Tennis Courts", icon: outdoor },
  { name: "Early Learning Centre", icon: earlyLearning },
  { name: "Kids Play Area", icon: kidsPlay },
  { name: "Indoor Squash & Badminton Courts", icon: indoor },
];

const AmenitiesSection = () => {
  return (
    <div className="lg:mx-30 md:mx-16">
      <div className="p-6 bg-[#F9FAFB] rounded border border-[#F9FAFB] shadow">
        <h2 className="text-2xl font-semibold mb-8">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
          {amenitiesList.map((amenity, index) => (
            <div key={index} className="flex items-center p-4 rounded ">
              <div>
                <img src={amenity.icon} alt="" className="size-10" />
              </div>
              <span className="text-[#101010]">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
