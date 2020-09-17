import React, { useState, useEffect } from "react";
import Axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(translated);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (text) {
        setDebouncedTerm(text);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await Axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedTerm,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedTerm]);
  return (
    <div>
      <h1 className='ui header'>{translated} </h1>
    </div>
  );
};

export default Convert;
