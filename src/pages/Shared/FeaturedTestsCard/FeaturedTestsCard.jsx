
const FeaturedTests = ({data}) => {
  const { category, description, image, dateline, status, by, publisher } = data;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body gap-5">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{category}</h2>
            <img src={image} className="w-24 h-24 rounded-full" alt="" />
          </div>
          <p>{description}</p>
          <div className="flex gap-5">
            <div>
              <p>{dateline}</p>
              <h4 className="text-xl">{status}</h4>
            </div>
            <div>
              <p>{by}</p>
              <h4 className="text-xl">{publisher}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTests;
