import { MisdemeanourKind } from "../../types/misdemeanours.types";

export interface MisdeamenaorsProps {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string;
}

const MisdeamnorItem: React.FC<MisdeamenaorsProps> = ({
  citizenId,
  misdemeanour,
  date,
}) => {
  const MisdeamnorItemProp = {
    rudeness: "🤪",
    lift: "🗣",
    united: "😈",
    vegetables: "🥗",
  };
  const randomId = Math.floor(Math.random() * 1000 + 1);

  return (
    <div className="grid__container">
      <div>
        <p>{citizenId}</p>
      </div>
      <div>
        <p>{date}</p>
      </div>
      <div>
        <p>
          {MisdeamnorItemProp[misdemeanour]}
          {misdemeanour}
        </p>
      </div>
      <div>
        <img src={`https://picsum.photos/id/${randomId}/100/100`} />
      </div>
    </div>
  );
};

export default MisdeamnorItem;
