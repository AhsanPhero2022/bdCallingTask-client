import aboutUsBanner from "../../../assets/images/about-us-banner.jpeg";

const AboutBanner = () => {
  return (
    <div className="mx-auto bg-opacity-0 w-full h-[320px]">
      <img
        src={aboutUsBanner}
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default AboutBanner;
