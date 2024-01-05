import { useState } from "react";
import ConfessionDetails from "./confessionDetails";
import ConfessionReasonForContact from "./confessionReasonContact";
import ConfessionSubject from "./confessionSubject";

const ConfessionPage: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [confessionDetails, setConfessionDetails] = useState("");
  return (
    <form className="form__container">
      <p>
        It's very difficult to catch people commiting misdemeanours so we
        appreciate it when citizens confess to us directly
      </p>
      <p>
        However, if you're just having a hard day and need to vent then you're
        welcome to contact us here too. Up to you!
      </p>
      <ConfessionSubject
        confessionSubject={subject}
        onChangeConfessionSubject={(value) => setSubject(value)}
      />
      <ConfessionReasonForContact
        reasonForContact={reason}
        onChangeReasonForContact={(value) => setReason(value)}
      />
      <ConfessionDetails
        confessionDetails={confessionDetails}
        onChangeConfessionDetail={(value) => setConfessionDetails(value)}
      />
      <button type="submit">confess</button>
    </form>
  );
};

export default ConfessionPage;
