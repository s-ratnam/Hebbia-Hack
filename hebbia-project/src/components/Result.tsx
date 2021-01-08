import * as React from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import '../style/Result.css';
import { outline, blurb } from '../actions';
import imgLoader from '../images/imgLoader.gif';
import document from '../images/document.svg';
import * as cheerio from 'cheerio';
import axios from 'axios';
// import { store } from '../reducers';
// import Highlighter from "react-highlight-words";


export interface IData {
  title: string;
  link: string;
  snippet?: string;
  favicon?: string;
  pagemap?: {cse_image?: any};
}

interface IResultProps {
  data: IData;
  screenshots: string[];
}

interface IResult2Props {
  data: IData;
  screenshots: string[];
}

const list1 = [] as any;
const list2 = [] as any;
const list3 = [] as any;
const list4 = [] as any;
const list5 = [] as any;
const list6 = [] as any;


const resolveImage = (pagemap: IData['pagemap'], link: string, screenshots: any[]) => {
  if (pagemap && pagemap.cse_image) {
    const [{src}] = pagemap.cse_image;
    return src;
  } else {
    for (let i = 0; i < screenshots.length; i++) {
      if (screenshots[i].link === link) {
        return screenshots[i].screenshot;
      }
    }
    return imgLoader;
  }
};


// URL 1
const orig = 'https://tranquil-basin-83401.herokuapp.com/'
let curr = 'https://en.wikipedia.org/wiki/Natural_language_processing';
list1.push(curr);
let url = orig.concat(curr.toString())
const AxiosInstance = axios.create();
AxiosInstance.get(url)
.then(
  response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const all = $('.firstHeading');
    const all2 = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
   
    const output = all.text();
    // const IResult2Props
    list1.push(output);
    list1.push(all2.text());
  }
)


// URL 2
curr = 'https://en.wikipedia.org/wiki/Computer_science';
list2.push(curr)
url = orig.concat(curr.toString())
AxiosInstance.get(url)
.then(
  response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const all = $('.firstHeading');
    const all2 = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
   
    const output = all.text();
    // const IResult2Props
    list2.push(output);
    list2.push(all2.text())
    
  }
)

// URL 3
curr = 'https://en.wikipedia.org/wiki/Artificial_intelligence';
list3.push(curr)
url = orig.concat(curr.toString())
AxiosInstance.get(url)
.then(
  response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const all = $('.firstHeading');
    const all2 = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
   
    const output = all.text();
    // const IResult2Props
    list3.push(output);
    list3.push(all2.text())
    
  }
)

// URL 4
curr = 'https://en.wikipedia.org/wiki/Machine_learning';
list4.push(curr)
url = orig.concat(curr.toString())
AxiosInstance.get(url)
.then(
  response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const all = $('.firstHeading');
    const all2 = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
   
    const output = all.text();
    // const IResult2Props
    list4.push(output);
    list4.push(all2.text())
    
  }
)

// URL 5
curr = 'https://en.wikipedia.org/wiki/Deep_learning';
list5.push(curr)
url = orig.concat(curr.toString())
AxiosInstance.get(url)
.then(
  response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const all = $('.firstHeading');
    const all2 = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
   
    const output = all.text();
    // const IResult2Props
    list5.push(output);
    list5.push(all2.text())
    
  }
)

// URL 6
curr = 'https://en.wikipedia.org/wiki/Natural-language_understanding';
list6.push(curr)
url = orig.concat(curr.toString())
AxiosInstance.get(url)
.then(
  response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const all = $('.firstHeading');
    const all2 = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
   
    const output = all.text();
    // const IResult2Props
    list6.push(output);
    list6.push(all2.text())
    
  }
)

export const newResult = (pending: any) => {
  console.log("TEST 3")
  if (pending.length === 0) {
    console.log("TEST 2")
    return null;
  }
  else {
    console.log("TEST 3")
    console.log("In here!!")
    console.log(pending);
    const newlist: any = []; 
    newlist.push(pending);
    url = orig.concat(pending.toString());
    fetch(url)
    .then(res => {
      return Promise.all([res.text()])
    })
    .then(data => {
      const $ = cheerio.load(data[0]);
      const content = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
      const title = $('.firstHeading');
      newlist.push(title.text());
      newlist.push(content.text());
    })
    // AxiosInstance.get(url)
    // .then(
    //   response => {
    //     const html = response.data;
    //     const $ = cheerio.load(html);
    //     const all = $('.firstHeading');
    //     const all2 = $('.mw-parser-output > p, ul, h1, h2, h3, h4');
      
    //     const output = all.text();
    //     // const IResult2Props
    //     newlist.push(output);
    //     newlist.push(all2.text())
        
    //   }
    // )
    
    return (
      <div className = "card">
        <div className = "card-body">
          <h4 className="title">
            <a className="ext-link" target="_blank" href={newlist[0]}>
              {newlist[1]}
            </a>
          </h4>
          <Tooltip
            placement="right"
            overlay={'Full Text Outline'}
            arrowContent={<div className="rc-tooltop-arrow-inner" />}
          >
            <img className="icon" alt="outline" src={document} onClick={() => outline(newlist[0])}/>
          </Tooltip>
          <div className="wrap">
            <p className="description">Under construction...</p>
          </div>
        </div>
      </div>
  );

  }
  
}

export const ResultTest = ({ data ,screenshots}: IResult2Props) => ( 
  <div>
    <div className = "card">
      <div className = "card-body">
        <h4 className="title">
          <a className="ext-link" target="_blank" href={list1[0]}>
            {list1[1]}
          </a>
        </h4>
        <Tooltip
          placement="right"
          overlay={'Full Text Outline'}
          arrowContent={<div className="rc-tooltop-arrow-inner" />}
        >
          <img className="icon" alt="outline" src={document} onClick={() => outline(list1[0])}/>
        </Tooltip>
        <div className="wrap">
          <p className="description">{list1[2].slice(0,300)}...</p>
        </div>

      </div>
    </div>
    <div className = "card">
      <div className = "card-body">
        <h4 className="title">
          <a className="ext-link" target="_blank" href={list2[0]}>
            {list2[1]}
          </a>
        </h4>
        <Tooltip
          placement="right"
          overlay={'Full Text Outline'}
          arrowContent={<div className="rc-tooltop-arrow-inner" />}
        >
          <img className="icon" alt="outline" src={document} onClick={() => outline(list2[0])}/>
        </Tooltip>
        <div className="wrap">
          <p className="description">{list2[2].slice(0,300)}...</p>
        </div>

      </div>
    </div>
    <div className = "card">
      <div className = "card-body">
        <h4 className="title">
          <a className="ext-link" target="_blank" href={list3[0]}>
            {list3[1]}
          </a>
        </h4>
        <Tooltip
          placement="right"
          overlay={'Full Text Outline'}
          arrowContent={<div className="rc-tooltop-arrow-inner" />}
        >
          <img className="icon" alt="outline" src={document} onClick={() => outline(list3[0])}/>
        </Tooltip>
        <div className="wrap">
          <p className="description">{list3[2].slice(0,300)}...</p>
        </div>

      </div>
    </div>
    <div className = "card">
      <div className = "card-body">
        <h4 className="title">
          <a className="ext-link" target="_blank" href={list4[0]}>
            {list4[1]}
          </a>
        </h4>
        <Tooltip
          placement="right"
          overlay={'Full Text Outline'}
          arrowContent={<div className="rc-tooltop-arrow-inner" />}
        >
          <img className="icon" alt="outline" src={document} onClick={() => outline(list4[0])}/>
        </Tooltip>
        <div className="wrap">
          <p className="description">{list4[2].slice(0,300)}...</p>
        </div>

      </div>
    </div>
    <div className = "card">
      <div className = "card-body">
        <h4 className="title">
          <a className="ext-link" target="_blank" href={list5[0]}>
            {list5[1]}
          </a>
        </h4>
        <Tooltip
          placement="right"
          overlay={'Full Text Outline'}
          arrowContent={<div className="rc-tooltop-arrow-inner" />}
        >
          <img className="icon" alt="outline" src={document} onClick={() => outline(list5[0])}/>
        </Tooltip>
        <div className="wrap">
          <p className="description">{list5[2].slice(0,300)}...</p>
        </div>

      </div>
    </div>
    <div className = "card">
      <div className = "card-body">
        <h4 className="title">
          <a className="ext-link" target="_blank" href={list6[0]}>
            {list6[1]}
          </a>
        </h4>
        <Tooltip
          placement="right"
          overlay={'Full Text Outline'}
          arrowContent={<div className="rc-tooltop-arrow-inner" />}
        >
          <img className="icon" alt="outline" src={document} onClick={() => outline(list6[0])}/>
        </Tooltip>
        <div className="wrap">
          <p className="description">{list6[2].slice(0,300)}...</p>
        </div>
      </div>
    </div>
    <div>
      {newResult(blurb)}
    </div>
  </div>

);


export const Result = ({ data ,screenshots}: IResultProps) => (  
  <div className="card">
      <a target="_blank" href={decodeURI(data.link)}>
        <img className="preview" src={resolveImage(data.pagemap, data.link, screenshots)} />
      </a>
      <div className="card-body">
        <a target="_blank" href={data.link}>
          <img
            className="favicon"
            src={`https://www.google.com/s2/favicons?domain=${data.link}`}
          />
        </a>
        <h4 className="title">
          <a className="ext-link" target="_blank" href={decodeURI(data.link)}>
            TEST TEST
          </a>
        </h4>
        <Tooltip
          placement="right"
          overlay={'Text-Only Outline'}
          arrowContent={<div className="rc-tooltip-arrow-inner" />}
        >
          <img className="icon" alt="outline" src={document} onClick={() => outline(data.link)} />
        </Tooltip>
        <div className="wrap">
          <p className="description">test</p>
        </div>
      </div>
    </div>
);
