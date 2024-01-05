interface ConfessionDetailProps {
  confessionDetails: string;
  onChangeConfessionDetail: (value: string) => void;
}

const ConfessionDetails: React.FC<ConfessionDetailProps> = ({
  confessionDetails,
  onChangeConfessionDetail,
}) => {
  return (
    <>
      <textarea
        rows={4}
        cols={50}
        value={confessionDetails}
        onChange={(e) => onChangeConfessionDetail(e.target.value)}
      />
    </>
  );
};

export default ConfessionDetails;
