import * as React from 'react';
import { ResultsList } from './ResultsList';
import { Link } from 'react-router-dom';
import { Outline } from './Outline';
import { handleKey, handleKey2, search, setQuery } from '../actions';
import '../style/ResultsView.css';
import glass from '../images/logo.png';
import plus from '../images/plus.png';
import googdrive from '../images/googdrive.png';
import { Loader } from './Loader';
import Tooltip from 'rc-tooltip';



export const ResultsView: React.StatelessComponent<any> = ({ results, outline, screenshots, query, loadingStatus }: any): JSX.Element => {
  const mobile: string[] = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry'];
  return (
    <div>
      <div className="top-bar">
        <Link to="/" target="_self">
          <h3 className="heading-1">Hebbia</h3>
          <h3 className="heading-2">Search</h3>
        </Link>
        <input
          defaultValue={decodeURI(query)}
          onKeyPress={e => handleKey(e, 'reset')}
          onChange={e => setQuery(e)}
        />
        <img onClick={() => search('reset')} className="glass" alt="magnifying glass" src={glass} />
        <Link to="/about" className="about-bar">
          About
        </Link>
          <Tooltip
            placement="right"
            overlay={'Add a link'}
          >
          <a className="button1" href="#popup1"><img className="image" src={plus} /></a>
          </Tooltip>
          <div id="popup1" className="overlay">
            <div className="popup">
              <h2>Add a link</h2>
              <a className="close" href="#">&times;</a>
              <div className="content">
                <input onKeyPress={e => handleKey2(e)}/>
              </div>
            </div>
        </div>
        <Tooltip
            placement="right"
            overlay={'Upload a file'}
          >
          <a className="button2" href="#popup1"><img className="image" src={googdrive} /></a>
          </Tooltip>

      </div>
      <Outline outline={outline} />
      {loadingStatus === true
         ? <div className={mobile.includes(navigator.platform) ? "" : "load-wrap"}><Loader /></div>
         : <ResultsList results={results} screenshots={screenshots} />
      }
    </div>
  );
};
