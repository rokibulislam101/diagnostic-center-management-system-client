
const TestsCard = ({data}) => {
  const { image, dateline, category, description } = data;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="w-full h-full" alt="Tests" />
        </figure>
        <div className="card-body">
          <p>{dateline}</p>
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
          <p>Find out more →</p>
        </div>
      </div>
    </div>
  );
}

export default TestsCard
