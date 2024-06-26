import buyScreenBannerImg from "../../../assets/images/buyScreenBannerImg.jpeg";

const ServiceBanner = () => {
  return (
    <div className="mx-auto bg-opacity-0 w-full h-[320px]">
      <img
        src={buyScreenBannerImg}
        alt="Banner"
        className="w-full h-[310px] object-cover"
      />
    </div>
  );
};

export default ServiceBanner;
