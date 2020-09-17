import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "what is React?",
    content: "react is a front-end javascript framework",
  },
  {
    title: "why use React?",
    content: "react is a favorite javascript library",
  },
  {
    title: "how do you use React?",
    content: "you use react by creating components",
  },
];

const options = [
  {
    label: "the Color red",
    value: "red",
  },
  {
    label: "the Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <div>
        <Route path='/'>
          <Accordion items={items} />
        </Route>

        <Route path='/list'>
          <Search />
        </Route>

        <Route path='/dropdown'>
          <Dropdown
            label='select a color'
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        </Route>

        <Route path='/translate'>
          <Translate />
        </Route>
      </div>
    </div>
  );
};
