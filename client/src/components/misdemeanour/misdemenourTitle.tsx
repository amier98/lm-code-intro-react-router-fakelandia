import MisdeamnorFilter from "./misdemeanourFilter";

const MisdeamenaorTitle: React.FC = ({}) => {
  return (
    <>
      <div className="grid__container">
        <div className="title__text">
          <h2>Citizen ID</h2>
        </div>
        <div className="title__text">
          <h2>Date</h2>
        </div>
        <div className="title__text">
          <h2>Misdemeanour</h2>
          <MisdeamnorFilter />
        </div>
        <div className="title__text">
          <h2>Punishment Idea</h2>
        </div>
      </div>
    </>
  );
};

export default MisdeamenaorTitle;
