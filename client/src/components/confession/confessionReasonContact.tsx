interface ReasonForContactProps {
  reasonForContact: string;
  onChangeReasonForContact: (value: string) => void;
}

const ConfessionReasonForContact: React.FC<ReasonForContactProps> = ({
  reasonForContact,
  onChangeReasonForContact,
}) => {
  return (
    <>
      <label htmlFor="reasonForContact">Reason for Contact:</label>
      <select
        value={reasonForContact}
        onChange={(e) => onChangeReasonForContact(e.target.value)}
      >
        <option value="just-talk">just-talk</option>
        <option value="rudeness">rudeness</option>
        <option value="united">united</option>
        <option value="vegetables">vegetables</option>
        <option value="lift">lift</option>
      </select>
    </>
  );
};

export default ConfessionReasonForContact;
