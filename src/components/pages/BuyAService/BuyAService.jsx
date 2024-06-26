import PostProperty from "../../design/BuyServicePage/PostProperty";
import Properties from "../../design/BuyServicePage/Properties";
import PropertySearch from "../../design/BuyServicePage/PropertySearch";
import ServiceBanner from "../../design/BuyServicePage/ServieceBanner";
import Testimonials from "../../design/Home/Testimonials";

const BuyAService = () => {
  return (
    <div>
      <ServiceBanner />
      <PropertySearch />
      <Properties />
      <Testimonials />
      <PostProperty />
    </div>
  );
};

export default BuyAService;
