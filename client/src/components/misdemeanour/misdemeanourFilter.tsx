import { useMisdeamnorFilter } from "../hooks/useMisdeamnourFilter";

const MisdeamnorFilter: React.FC = () => {
  const { selectedFilter, setSelectedFilter } = useMisdeamnorFilter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };
  return (
    <select className="item" value={selectedFilter} onChange={handleChange}>
      <option value="all">All</option>
      <option value="united">United</option>
      <option value="vegetables">Vegetables</option>
      <option value="lift">Lift</option>
      <option value="rudeness">Rudeness</option>
    </select>
  );
};

export default MisdeamnorFilter;
