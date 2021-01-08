import * as React from 'react';
import { Loader } from './Loader';
import '../style/Outline.css';
import Highlighter from "react-highlight-words";
import { store } from '../reducers';

interface IOutlineProp {
  outline?: {
    title?: string;
    text?: string;
  };
}

export const Replace  = (outline: any) => {
  const a = store.getState().query;
  console.log(a);
  console.log(typeof a);
  const regexpNumber = new RegExp('computer science', 'gi');
  const match = regexpNumber.test(outline.text)
  
  
  if (match != null) {
    const all1 = outline.text;
    return (
      <div>
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords= {a.split("%20")}
          autoEscape = {true}
          textToHighlight={all1}
        />
      </div>
    )
  }
  else {
    const test2 = "This is a test #2: ";
    const all2 = test2.concat(outline.text);
    return (
      <div>{all2}</div>
    )
  }
}



export const Outline: React.StatelessComponent<IOutlineProp> = ({ outline }: IOutlineProp): JSX.Element => {
  if (outline === 'outline loading...') {
    return (
      <div className="outline">
        <Loader />
      </div>
    );
  }
  return (
      <div className="outline">
        <h4 className="placeholder">{!!outline ? null : 'Hebbia Text-Outline\n v.1.0.0'}</h4>
        <h3>{!outline ? null : outline.title}</h3>
        <p id = "test">{!outline ? null : Replace(outline)}</p>
      </div>
  );

};


 

