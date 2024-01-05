import { useContext } from "react";
import MisdeamnorItem from "./misdeamnour-Item";
import MisdeamenaorTitle from "./misdemenourTitle";
import { MisdeamnorContext } from "../layout/mainLayout";

const MisdemeanourList: React.FC = () => {
  const data = useContext(MisdeamnorContext);

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
