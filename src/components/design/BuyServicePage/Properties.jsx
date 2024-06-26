import Slider from "react-slick";
import { MapPinIcon } from "@heroicons/react/24/outline";
import property1 from "../../../assets/images/property1.jpeg";
import property2 from "../../../assets/images/property2.jpeg";
import property3 from "../../../assets/images/property3.jpeg";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      name: "Modern Apartment",
      location: "New York, NY",
      price: 2500,
    },
    {
      id: 2,
      image: property2,
      name: "Cozy Cottage",
      location: "Portland, OR",
      price: 1500,
    },
    {
      id: 3,
      image: property3,
      name: "Luxury Villa",
      location: "Los Angeles, CA",
      price: 4500,
    },
    {
      id: 4,
      image: property1,
      name: "Beach House",
      location: "Miami, FL",
      price: 3500,
    },
    {
      id: 5,
      image: property2,
      name: "Mountain Cabin",
      location: "Denver, CO",
      price: 2000,
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-gray-300 py-12 lg:mx-30 md:mx-16">
      <div className="flex justify-between items-center mx-8">
        <h1 className="text-3xl font-bold  mb-8">New Listed Properties</h1>
        <a className="text-blue-500 underline" href="">
          See all property
        </a>
      </div>
      <div className="mx-8">
        <Slider {...settings}>
          {properties.map((property) => (
            <div key={property.id} className="p-2  slider-item">
              <div className="bg-gray-100">
                <img
                  className="w-full h-[250px]"
                  src={property.image}
                  alt={property.name}
                />
                <div className="p-4">
                  <div className="flex justify-between items-center my-3">
                    <p className="bg-blue-300 px-2 py-1 rounded">Apartment</p>

                    <p>Ready to Move</p>
                  </div>
                  <hr />
                  <h3 className="text-xl font-semibold">{property.name}</h3>
                  <p className="flex gap-2">
                    <MapPinIcon className="size-6 text-red-500" />
                    {property.location}
                  </p>
                  <p className="font-bold">${property.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Properties;
