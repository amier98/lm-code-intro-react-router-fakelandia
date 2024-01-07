import MisdeamnorItem from "./misdeamnour-Item";
import MisdeamenaorTitle from "./misdemenourTitle";
import { useMisdeamnorFilter } from "../hooks/useMisdeamnourFilter";

const MisdemeanourList: React.FC = () => {
  const { filteredData } = useMisdeamnorFilter();
  console.log(filteredData);

  return (
    <>
      <MisdeamenaorTitle />
      {filteredData?.map((sins) => (
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
