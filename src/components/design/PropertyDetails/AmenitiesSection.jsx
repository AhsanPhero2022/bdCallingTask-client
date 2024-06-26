import {
  FaBolt,
  FaArrowCircleUp,
  FaHome,
  FaHeart,
  FaAdjust,
  FaTruck,
  FaShieldAlt,
  FaWater,
  FaSun,
  FaLightbulb,
  FaCube,
  FaPhone,
  FaWrench,
  FaTrash,
  FaCog,
  FaWifi,
  FaDesktop,
  FaFire,
  FaUsers,
  FaCalendarAlt,
  FaChild,
} from "react-icons/fa";

// Map your old icon names to react-icons
const iconMap = {
  power: FaBolt,
  lift: FaArrowCircleUp,
  club: FaHome,
  gymnasium: FaHeart,
  park: FaAdjust,
  reservedParking: FaTruck,
  security: FaShieldAlt,
  water: FaWater,
  privateGarden: FaSun,
  vaastuCompliant: FaLightbulb,
  ServiceGoodsLift: FaCube,
  VisitorParking: FaTruck,
  intercom: FaPhone,
  maintenance: FaWrench,
  waste: FaTrash,
  laundry: FaCog,
  internet: FaWifi,
  dthTelevision: FaDesktop,
  pipegas: FaFire,
  jogging: FaUsers,
  outdoor: FaCalendarAlt,
  earlyLearning: FaChild,
  kidsPlay: FaChild,
};

const amenitiesList = [
  { name: "Power Back Up", icon: "power" },
  { name: "Lift", icon: "lift" },
  { name: "Club House", icon: "club" },
  { name: "Gymnasium", icon: "gymnasium" },
  { name: "Park", icon: "park" },
  { name: "Reserved Parking", icon: "reservedParking" },
  { name: "Security", icon: "security" },
  { name: "Water Storage", icon: "water" },
  { name: "Private Terrace/Garden", icon: "privateGarden" },
  { name: "Vaastu Compliant", icon: "vaastuCompliant" },
  { name: "Service/Goods Lift", icon: "ServiceGoodsLift" },
  { name: "Visitor Parking", icon: "VisitorParking" },
  { name: "Intercom Facility", icon: "intercom" },
  { name: "Maintenance Staff", icon: "maintenance" },
  { name: "Waste Disposal", icon: "waste" },
  { name: "Laundry Service", icon: "laundry" },
  { name: "Internet/Wi-Fi Connectivity", icon: "internet" },
  { name: "DTH Television Facility", icon: "dthTelevision" },
  { name: "Piped Gas", icon: "pipegas" },
  { name: "Jogging and Strolling Track", icon: "jogging" },
  { name: "Outdoor Tennis Courts", icon: "outdoor" },
  { name: "Early Learning Centre", icon: "earlyLearning" },
  { name: "Kids Play Area", icon: "kidsPlay" },
  { name: "Indoor Squash & Badminton Courts", icon: "indoor" },
];

const AmenitiesSection = () => {
  return (
    <div>
      <div className="p-6 bg-[#F9FAFB] rounded border border-[#F9FAFB] shadow">
        <h2 className="text-2xl font-semibold mb-8">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
          {amenitiesList.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon];
            return (
              <div key={index} className="flex items-center p-4 rounded">
                <div>
                  <IconComponent className="h-6 w-6 text-gray-600" />
                </div>
                <span className="ml-2 text-[#101010]">{amenity.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
