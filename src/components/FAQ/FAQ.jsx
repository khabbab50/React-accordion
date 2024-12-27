import { useEffect, useState } from "react";
import faq_data from "./FAQ_data.json";
import FAQLayout from "./FAQLayout";

const FAQ = () => {
  const [data, setData] = useState([]);
  const [faqShowAndHide, setFaqShowAndHide] = useState(false);

  const handleFaqShowAndHide = (id) => {
    setFaqShowAndHide((prevId) => (prevId === id ? false : id));
  };

  useEffect(() => {
    setData(faq_data);
  }, []);

  return (
    <div className="w-screen h-screen py-10">
      <ul className="w-1/2 mx-auto p-10 shadow-2xl space-y-3 rounded-xl">
        <h2 className="text-green-600 font-bold underline text-center text-3xl">
          React Accordion
        </h2>
        {data.map((correnData) => (
          <li key={correnData.id}>
            <FAQLayout
              faqData={correnData}
              faqShowAndHide={faqShowAndHide === correnData.id}
              handleFaqShowAndHide={() => handleFaqShowAndHide(correnData.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
