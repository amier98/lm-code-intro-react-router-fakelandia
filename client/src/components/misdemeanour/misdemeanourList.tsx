import useMisdeamnorContext from "../hooks/useContextMisdeamenour";
import MisdeamnorItem from "./misdeamnour-Item";
import MisdeamenaorTitle from "./misdemenourTitle";

const MisdemeanourList: React.FC = () => {
  const data = useMisdeamnorContext();

  return (
    <>
      <MisdeamenaorTitle />
      {data?.map((sins) => (
        <MisdeamnorItem
          key={sins.citizenId}
          citizenId={sins.citizenId}
          misdemeanour={sins.misdemeanour}
          date={sins.date}
        />
      ))}
    </>
  );
};

export default MisdemeanourList;
