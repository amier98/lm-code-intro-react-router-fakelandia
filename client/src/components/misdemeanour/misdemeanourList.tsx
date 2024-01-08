import MisdeamnorItem from "./misdeamnour-Item";
import MisdeamenaorTitle from "./misdemenourTitle";
import { useMisdeamnorFilter } from "../hooks/useMisdeamnourFilter";
import MisdeamnorFilter from "./misdemeanourFilter";

const MisdemeanourList: React.FC = () => {
  const { filteredData } = useMisdeamnorFilter();
  console.log(filteredData);

  return (
    <>
      <MisdeamenaorTitle />
      {!filteredData && <p className="loading__text">Loading data...</p>}
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
