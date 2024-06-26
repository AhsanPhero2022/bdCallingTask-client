// SliderComponent.jsx

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MapPinIcon } from "@heroicons/react/24/outline";
const PropertyDetails = () => {
  const images = [
    {
      id: 1,
      src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      alt: "Slide 1",
      name: "Item 1",
      location: "Location 1",
      price: 100,
    },
    {
      id: 2,
      src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      alt: "Slide 2",
      name: "Item 2",
      location: "Location 2",
      price: 200,
    },
    {
      id: 3,
      src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      alt: "Slide 3",
      name: "Item 3",
      location: "Location 3",
      price: 300,
    },
  ];

  const onClickItem = (index) => {
    console.log(`Clicked item index: ${index}`);
  };

  return (
    <div className="grid lg:grid-cols-3  gap-4 my-12  ">
      <div className="col-span-2">
        <div className="">
          <h1 className=" font-bold">
            3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
            <span className="ms-4">$ 300k</span>
          </h1>
          <p className="text-sm flex mb-2">
            <MapPinIcon className="size-6 text-red-500" />
            Meadowshire Park, Greenfield, USA
          </p>
        </div>
        <Carousel
          className="border shadow-lg rounded"
          showArrows={true}
          onClickItem={onClickItem}
        >
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Carousel>
        <div className="my-8 px-12 bg-blue-50 rounded py-8">
          <h1 className="text-xl font-semibold">Overview</h1>
          <div className="flex justify-between items-center border  shadow-lg mb-6 px-4 py-2 rounded my-6">
            <p className="">2 Beds</p>
            <p>2 Bath</p>
            <p>2 Balcony</p>
            <p>Fully Furnished</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Carpet Area</p>
                <h1>2000 sqft</h1>
                <p className="text-sm text-gray-400">$ 225/sqft</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Floor</p>
                <h1>Second (Out of 6th floor)</h1>
              </div>
              <div>
                <p className="text-sm text-gray-400">Transaction Type</p>
                <h1>Ready to move</h1>
              </div>
              <div>
                <p className="text-sm text-gray-400">Lift</p>
                <h1>1</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="text-sm text-gray-400">Facing</p>
                <h1>North - East</h1>
              </div>
              <div>
                <p className="text-sm text-gray-400">Additional Rooms</p>
                <h1>1 servant room & 1 gust room</h1>
              </div>
              <div>
                <p className="text-sm text-gray-400">Age of construction</p>
                <h1>New Construction</h1>
              </div>
              <div>
                <p></p>
                <h1></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* property value and map start */}
      <div className="lg:mt-14 mx-auto col-span-3 lg:col-span-1">
        <div className="bg-blue-50 py-6 px-4 rounded">
          <p className="text-sm text-gray-500">Property Value</p>
          <h1 className="text-3xl font-bold my-4">$ 300k - $ 310k</h1>
          <p className="text-sm text-gray-500">
            Your bid can not be than 10% of the property Minimum value.
          </p>
          <div>
            <p className="text-sm">min</p>
            <h1 className="px-2 py-3 bg-white w-3/4 ms-4">$ 280k</h1>
            <p>max</p>
            <h1 className="px-2 py-3 bg-white w-3/4 ms-4">$ 320k</h1>
          </div>
          <div className="mt-6">
            <p>$280k</p>
            <p>$320k</p>
          </div>
          <div className="text-center ">
            <button className="px-6 py-3 bg-blue-500 rounded-md text-white btn">
              Bid Property
            </button>
          </div>
        </div>
        <div className="mt-6  ">
          <img
            className="w-full h-[354px] rounded"
            src="https://s3-alpha-sig.figma.com/img/18e0/505f/0243f270b5bd3d4534df7043be08f139?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOWt1Nn-oElF73njyMx0VYvY6GCLO4B-~mgtbhrHKOgu05ArrhTnvKXm5tU8yos1wripbY9AySqYMz-LlPbExPNY1Os1fHIKiQnvSMx5oQDriCooNeuic9EKLDLf8EjXTuo9ZFSs5KEIYat~97DA~n-VrZ3svXUfoui9b4z0KOuDO~MVWZJk5IV44K3iSAF-fMAjcHYqW4J-O3LpcFJMpgErIAz-i9i5pU0ISPq0cqzP1tQasoJLlHZQVkanNImzCLSOddfte3SFAe-jJs7fLy8wLsrsCB59fbQA4UAfRucGhL6YeNE7u8y-6pNnLl6YY2TDc3qa2-64gm~DHd7r2g__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
