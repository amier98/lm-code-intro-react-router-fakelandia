import { useState } from "react";
import ConfessionDetails from "./confessionDetails";
import ConfessionReasonForContact from "./confessionReasonContact";
import ConfessionSubject from "./confessionSubject";

import {
  Misdemeanour,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";
import { useMisdeamnorFilter } from "../hooks/useMisdeamnourFilter";

const ConfessionPage: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [confessionDetails, setConfessionDetails] = useState("");

  const { filteredData } = useMisdeamnorFilter();

  const addNewMisdemeanour = (reasonForContact: string) => {
    const newMisdemeanour: Misdemeanour = {
      citizenId: Math.floor(15 + Math.random() * 20 * Math.random() * 1000),
      misdemeanour: reasonForContact as MisdemeanourKind,
      date: new Date().toLocaleDateString(),
    };
    filteredData?.push(newMisdemeanour);
  };

  const enabled = subject.length > 10 && confessionDetails.length > 15;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await fetch("http://localhost:8080/api/confess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: subject,
          reason: reason,
          details: confessionDetails,
        }),
      });

      const res = await result.json();

      if (res.success && res.justTalked === false) {
        addNewMisdemeanour(reason);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="ConfessionForm">
      <form className="form__container" onSubmit={handleSubmit}>
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
        {<p className="rule__text">Input must be at least 5 characters!</p>}
        <ConfessionReasonForContact
          reasonForContact={reason}
          onChangeReasonForContact={(value) => setReason(value)}
        />
        <ConfessionDetails
          confessionDetails={confessionDetails}
          onChangeConfessionDetail={(value) => setConfessionDetails(value)}
        />
        {<p className="rule__text">Input must be at least 10 characters!</p>}
        <button type="submit" disabled={!enabled}>
          confess now
        </button>
      </form>
    </section>
  );
};

export default ConfessionPage;
