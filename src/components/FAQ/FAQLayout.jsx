/* eslint-disable react/prop-types */

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const FAQLayout = ({ faqData, faqShowAndHide, handleFaqShowAndHide }) => {
  return (
    <div className="bg-gray-300 p-2 border-l-4 border-green-600">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl"> {faqData.question} </h3>
        <button
          onClick={handleFaqShowAndHide}
          className="text-green-600 text-2xl"
        >
          {faqShowAndHide ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {faqShowAndHide && <p> {faqData.answer} </p>}
    </div>
  );
};

export default FAQLayout;
