"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

export const Home2Accordion = () => {
  const faqData = [
    {
      id: "faq1",
      question: "How to Create a Chatbot to Fit Your Needs?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".3s",
    },
    {
      id: "faq2",
      question: "What is off page SEO link building?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".7s",
    },
    {
      id: "faq3",
      question: "How to Create a Chatbot to Fit Your Needs?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".7s",
    },
    {
      id: "faq4",
      question: "How can I order web design for my website?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".7s",
    },
    {
      id: "faq5",
      question: "How To Choose A Good QA Consultant?",
      answer:
        "We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall.",
      delay: ".5s",
      show: true,
    },
  ];
  const [toggle, setToggle] = useState("faq1");
  return (
    <Accordion className="accordion" id="accordion" defaultActiveKey={toggle}>
      {faqData.map(({ id, question, answer, delay, show }) => (
        <div
          key={id}
          className={`accordion-item wow fadeInUp`}
          data-wow-delay={delay}
        >
          <h4 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              className={`accordion-button ${toggle === id ? "" : "collapsed"}`}
              eventKey={id}
              aria-expanded={toggle === id ? "true" : "false"}
              onClick={() => setToggle(id)}
            >
              {question}
            </Accordion.Toggle>
          </h4>
          <Accordion.Collapse eventKey={id} className="accordion-collapse">
            <div className="accordion-body">{answer}</div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
