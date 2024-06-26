import propertyImg1 from "../../../assets/images/Landing1.jpg";
import propertyImg1extend from "../../../assets/images/Landing2.png";
import propertyImg2 from "../../../assets/images/property-2.jpeg";
import propertyImg2extend from "../../../assets/images/property-2-extend.jpeg";
import propertyImg3 from "../../../assets/images/Landing5.jpg";
import propertyImg3extend from "../../../assets/images/Landing6.png";
import search from "../../../assets/images/landSearch.png";
import player from "../../../assets/images/player.png";

const HomeBuying = () => {
  const properties = [
    {
      id: 1,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl: propertyImg1,
      extendImageUrl: propertyImg1extend,
    },
    {
      id: 2,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl: propertyImg2,
      extendImageUrl: propertyImg2extend,
    },
    {
      id: 3,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl: propertyImg3,
      extendImageUrl: propertyImg3extend,
    },
  ];

  return (
    <div className="my-16 mx-auto">
      <div className="lg:mx-20">
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`lg:flex justify-between mb-56 ${
              property.id === 2
                ? "lg:flex-row-reverse mb-10 lg:mt-64"
                : index === 2
                ? "-mt-28 "
                : ""
            }`}
          >
            <div className="lg:w-1/2 mb-4 lg:mb-0 relative mx-auto">
              <img
                src={property.imageUrl}
                alt="Property"
                className="w-[280px] h-[180px] sm:min-w-[358px] sm:min-h-[300px] max-w-[458px] max-h-[400px]  object-cover  rounded-md shadow-lg"
              />
              <img
                src={property.extendImageUrl}
                alt="Property-Extend"
                className={`w-[220px] h-[130px] sm:min-w-[352px] sm:min-h-[240px] max-w-[452px] max-h-[240px]   object-cover rounded-[8px] shadow-lg absolute left-[60px] bottom-[-104px] sm:left-[60px] sm:-bottom-[104px] md:left-[60px] md:-bottom-[104px] lg:left-[70px] lg:-bottom-8  ${
                  property.id === 2
                    ? " lg:left-[40px] lg:-top-[110px] xl:left-[104px] xl:-top-[110px]"
                    : ""
                }`}
              />
              <img
                src={player}
                alt="player"
                className={`absolute top-[150px] left-[20px] sm:top-[45%] sm:left-[90%]  md:top-44 md:left-80  lg:top-[50%] lg:left-[320px]  h-[72px] ${
                  property.id === 2
                    ? ` lg:left-[5%] lg:top-[-5%] xl:left-[10%] xl:top-[-10%]`
                    : ""
                }`}
              />
            </div>
            <div
              className={`lg:w-1/2 lg:pl-8 text-center lg:text-left mt-32 lg:mt-0 `}
            >
              <div className="flex items-center">
                <hr className="w-[51px] bg-[#F06711] text-[#F06711] border-[#F06711] h-[3px]" />

                <span className="text-[#F06711] text-lg font-semibold ml-2">
                  Property buying
                </span>
              </div>
              <h3 className="text-[40px] leading-[52px] font-bold text-[#111827] mt-4 mb-6">
                {property.title}
              </h3>
              <p className="text-[#667085] mb-12">{property.description}</p>
              <button className="bg-[#E6EFF7]  px-4 py-2 flex justify-center items-center rounded-[8px] mx-auto lg:mx-0">
                <span>
                  <img src={search} alt="" />
                </span>
                <span className="ml-1 md:text-base">Find Property</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBuying;
