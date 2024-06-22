import { Link } from 'react-router-dom';

const TestsCard = ({ data }) => {
  const { _id, image, dateline, category, description } = data;

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
          <Link to={`/Appointment/${_id}`}>
            <button className="btn btn-ghost border-2 bg-green-500 text-white mt-5">
              Find out more →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestsCard;
