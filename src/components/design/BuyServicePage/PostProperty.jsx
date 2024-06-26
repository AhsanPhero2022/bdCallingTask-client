const PostProperty = () => {
  return (
    <div className="mt-40 bg-[#FDECE2] rounded-md  lg:flex items-center justify-between gap-4 ">
      <div>
        <div className="w-full bg-[#FDF0E7] py-12">
          <div className=" mx-auto lg:flex md:flex items-center justify-between ">
            <div className="w-full md:w-[784px]">
              <h2 className=" font-montserrat text-[20px] font-semibold leading-[30px] text-center md:text-left text-[#101828]">
                Post your Property for free
              </h2>
              <p className="font-poppins text-[16px] font-normal leading-[24px] text-center md:text-left text-[#475467] mt-[8px]">
                List it on Your Propriety and get genuine leads
              </p>
            </div>
            <div>
              <button className="py-4 px-7 bg-[#F06224] hover:bg-[#F06224] hover:text-white text-white">
                Post Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProperty;
