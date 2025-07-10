import { useState } from "react";
import iconPlus from "../assets/icon-plus.svg";
import iconMinus from "../assets/icon-minus.svg";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <h2>{question}</h2>
        <img src={open ? iconMinus : iconPlus} alt="Toggle icon" />
      </div>
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQItem;
