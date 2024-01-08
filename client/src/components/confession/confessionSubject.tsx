interface ConfessionSubjectProps {
  confessionSubject: string;
  onChangeConfessionSubject: (value: string) => void;
}

const ConfessionSubject: React.FC<ConfessionSubjectProps> = ({
  confessionSubject,
  onChangeConfessionSubject,
}) => {
  return (
    <>
      <label htmlFor="confessionSubject">Subject:</label>
      <input
        id="confessionSubject"
        type="text"
        value={confessionSubject}
        onChange={(e) => onChangeConfessionSubject(e.target.value)}
      />
    </>
  );
};

export default ConfessionSubject;
