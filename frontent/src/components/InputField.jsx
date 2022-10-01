import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";

const InputField = ({ searchTerm, setSerchTerm, handleEnterKeyPress }) => {
  return (
    <div className="form_group">
      <div className="search_icon">
        <span className="icon">
          <AiOutlineSearch />
        </span>
      </div>
      <div className="input">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSerchTerm(e.target.value)}
          onKeyPress={handleEnterKeyPress}
        />
      </div>
      <div className="voice_icon">
        <span className="icon">
          <MdKeyboardVoice />
        </span>
      </div>
    </div>
  );
};

export default InputField;
