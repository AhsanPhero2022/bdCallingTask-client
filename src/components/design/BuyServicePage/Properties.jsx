import Slider from "react-slick";
import { MapPinIcon } from "@heroicons/react/24/outline";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/c6ec/67a0/4fb99d3762cc982e9f6c74e22461ff1d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iM86ybZhhgd1JGMdwDZnAWHiwMusDWaq81VNpZOpimwWvjRIERfOtUmixhlTs6PA73y4tafuwT-eOp1~SvOt2eD0iQ3xD68i-pCgEZIKXxW5NH2xtoEZiNlsOU5ekCZ6O22RS94jgHdspCXVc0zXPqw4DixrrQSq09kFvorHFDc9K4VC4Fyi80JyKO9TqEbkb086b0nYWdKfZjjwMJZtBRJRNX1IkU0Xgbilb9gF-cEJDkLqmscMMPaH85amNCaRduP61Qr2AIVYtM3RSZj7jNjlkdAO42usEzIPsxerlSaP0aVTFZ9yDYhEXKholGH4fvyTgfzQxKBv~pjxzA~Gyw__",
      name: "Modern Apartment",
      location: "New York, NY",
      price: 2500,
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/e381/cbc3/5859fa9eae776ba1491c8e0846679a0b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTloik~XPfKvX35wCj9jVadrlAId0X~0E4kfdYuAUxNAIUwEi646-ZcgN7KNUe6k3i0aACqZWZGPdoy3~~RheAkQXlt9uY0-4npcAWh238CsaalU9E7H~wQ07TLPcTIbn01qpuIQnTMT6hhu4eZhPCbxxjKKJMkyW-B2s-Po9tdEim8ianyvZNa4r15fIqJ4QaqyB5rbyjQQ4kyJYuxi0keabLnYJrrWN7SbW72g3YNW8MSAP6-3V~vwDUFC-plPoIcHjGvmzZ9hUSVtQR6oPpNTyE2uCakAvsaBtqYiv--ucEmB-TgqkZD42N4ta9GWPhzSIZ6pCTDvas8I0yvwyA__",
      name: "Cozy Cottage",
      location: "Portland, OR",
      price: 1500,
    },
    {
      id: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/e1fe/9540/4a524ce0f30f319b1b0616521eea2317?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y07hucj98k1G9jqcbvlGrpda7TWu6z3UfX6zzEYAN2j88mXvaqZwAHHnuKoDmOz27ObJfHxMhRuumqS-a1HL-LJ7xtXww7XNxGCHDlkAGC~CA9-iFtIcuMv2bZotUKOW45Vk9iudbTawyeCcY3cRhZQ45qnKS7IDRIR9YXMcNA7PAcyugs4UkimkoGZP9ld0UoKzBoy6a3d8GwGI5dTqRhGechWN-SHzgLsXLub9bnq0cJcPEnMOsDgrWwee~rb8BfUV4zgbBG7t5bgFmd3iHtVbnjRpcZbRnXaB3Rv45pCdgxM9KzuCgPTdW0cRRPkLT-L07hOTiPNObzyaG9l~Lw__",
      name: "Luxury Villa",
      location: "Los Angeles, CA",
      price: 4500,
    },
    {
      id: 4,
      image:
        "https://s3-alpha-sig.figma.com/img/e1fe/9540/4a524ce0f30f319b1b0616521eea2317?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y07hucj98k1G9jqcbvlGrpda7TWu6z3UfX6zzEYAN2j88mXvaqZwAHHnuKoDmOz27ObJfHxMhRuumqS-a1HL-LJ7xtXww7XNxGCHDlkAGC~CA9-iFtIcuMv2bZotUKOW45Vk9iudbTawyeCcY3cRhZQ45qnKS7IDRIR9YXMcNA7PAcyugs4UkimkoGZP9ld0UoKzBoy6a3d8GwGI5dTqRhGechWN-SHzgLsXLub9bnq0cJcPEnMOsDgrWwee~rb8BfUV4zgbBG7t5bgFmd3iHtVbnjRpcZbRnXaB3Rv45pCdgxM9KzuCgPTdW0cRRPkLT-L07hOTiPNObzyaG9l~Lw__",
      name: "Beach House",
      location: "Miami, FL",
      price: 3500,
    },
    {
      id: 5,
      image:
        "https://s3-alpha-sig.figma.com/img/e1fe/9540/4a524ce0f30f319b1b0616521eea2317?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y07hucj98k1G9jqcbvlGrpda7TWu6z3UfX6zzEYAN2j88mXvaqZwAHHnuKoDmOz27ObJfHxMhRuumqS-a1HL-LJ7xtXww7XNxGCHDlkAGC~CA9-iFtIcuMv2bZotUKOW45Vk9iudbTawyeCcY3cRhZQ45qnKS7IDRIR9YXMcNA7PAcyugs4UkimkoGZP9ld0UoKzBoy6a3d8GwGI5dTqRhGechWN-SHzgLsXLub9bnq0cJcPEnMOsDgrWwee~rb8BfUV4zgbBG7t5bgFmd3iHtVbnjRpcZbRnXaB3Rv45pCdgxM9KzuCgPTdW0cRRPkLT-L07hOTiPNObzyaG9l~Lw__",
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
    <div className="bg-gray-300 py-12">
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
