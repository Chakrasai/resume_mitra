const InputFeild = ({ type, placeholder, iconClass }) => {
  return (
    <div className="w-full flex items-center border border-[#20B2AA] py-2 px-4 card-shadow rounded-lg">
      <i className={`${iconClass} text-[#6D6868]/80 mr-2 text-xl`}></i>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-none text-[16px] text-[#303030]/90 bg-transparent"
      />
    </div>
  );
};

export default InputFeild;
