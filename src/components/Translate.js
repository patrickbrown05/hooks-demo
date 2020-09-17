import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Japanese",
    value: "ja",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, SetText] = useState("");

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => SetText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label='select a Language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className='ui header'> Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
