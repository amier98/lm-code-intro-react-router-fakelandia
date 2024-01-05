import { Misdemeanour } from "../../types/misdemeanours.types";

const MisdeamnorItemProp = {
  rudeness: "🤪",
  lift: "🗣",
  united: "😈",
  vegetables: "🥗",
};

const MisdeamnorItem: React.FC<Misdemeanour> = ({
  citizenId,
  misdemeanour,
  date,
}) => {
  const randomId = Math.floor(Math.random() * 100 + 1);

  return (
    <div className="grid__container">
      <div className="item">
        <p>{citizenId}</p>
      </div>
      <div className="item">
        <p>{date}</p>
      </div>
      <div className="item">
        <p>
          {MisdeamnorItemProp[misdemeanour]}
          {misdemeanour}
        </p>
      </div>
      <div className="item">
        <img src={`https://picsum.photos/id/${randomId}/100/100`} />
      </div>
    </div>
  );
};

export default MisdeamnorItem;
