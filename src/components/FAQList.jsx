import FAQItem from "./FAQItem";

const data = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript.",
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free ones being very helpful too!",
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Definitely! You can use any of your completed Frontend Mentor projects in your portfolio. It’s a great way to show off your skills.",
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and get support.",
  },
];

const FAQList = () => {
  return (
    <div className="faq-list">
      {data.map((item) => (
        <FAQItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FAQList;
