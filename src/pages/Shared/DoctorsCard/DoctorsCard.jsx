
const DoctorsCard = ({ data }) => {
  const { name, description, image, category } = data;
  return (
    <div className="flex justify-center">
      <div className="card card-compact bg-indigo-50 py-10 w-96 shadow-xl">
        <div className="card-body flex flex-col items-center text-center gap-5">
          <img
            src={image}
            className="rounded-full w-[250px] h-[250px] border-8 border-white"
            alt=""
          />
          <h3 className="font-bold text-xl">{name}</h3>
          <h5 className="font-bold bg-indigo-500 rounded-full w-fit px-3 py-1 text-white">
            {category}
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
