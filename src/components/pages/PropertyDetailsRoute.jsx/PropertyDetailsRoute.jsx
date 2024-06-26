import AmenitiesSection from "../../design/PropertyDetails/AmenitiesSection";
import Properties from "../../design/BuyServicePage/Properties";
import OtherServices from "../../design/Home/OthersService";
import PropertyDetails from "../../design/PropertyDetails/PropertyDetails";

const PropertyDetailsRoute = () => {
  return (
    <div className="">
      <PropertyDetails />
      <AmenitiesSection />
      <OtherServices />
      <Properties />
    </div>
  );
};

export default PropertyDetailsRoute;
