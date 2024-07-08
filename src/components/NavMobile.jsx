import React from "react";
import { Hidden } from "react-grid-system";
import { BsList } from "@react-icons/all-files/bs/BsList";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsCircleHalf } from "@react-icons/all-files/bs/BsCircleHalf";
import { BsQuestionCircle } from "@react-icons/all-files/bs/BsQuestionCircle";
import { BsBook } from "@react-icons/all-files/bs/BsBook";
import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";

const styles = {
  darkNav: {
    backgroundImage: "linear-gradient(#20202c 90%, transparent 100%)",
    color: "#eee",
    position: "fixed",
    width: "100vw",
    padding: "2vw",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    paddingBottom: "4vh",
  },
  lightNav: {
    backgroundImage: "linear-gradient(#eee 90%, transparent 100%)",
    color: "#111",
    position: "fixed",
    zIndex: 5,
    width: "100vw",
    padding: "2vw",
    top: 0,
    left: 0,
    right: 0,
    paddingBottom: "4vh",
  },
  titleDark: {
    position: "sticky",
    height: "50px",
    backgroundImage: "linear-gradient(#20202c 90%, transparent 100%)", //'linear-gradient(#20202c,
    zIndex: 5,
    width: "100vw",
    padding: "2vw",
    top: 0,
    overflow: "hidden",
    color: "#dc3e5d",
    fontSize: "20px",
  },
  titleLight: {
    position: "sticky",
    height: "50px",
    backgroundImage: "linear-gradient(#eee 90%, transparent 100%)", //'linear-gradient(#20202c,
    zIndex: 5,
    width: "100vw",
    padding: "2vw",
    top: 0,
    overflow: "hidden",
    color: "#dc3e5d",
    fontSize: "20px",
  },
  button: {
    background: "none",
    border: "none",
    textAlign: "center",
    padding: 0,
  },
  input: {
    height: "2em",
    marginTop: ".1em",
    padding: ".2em",
    color: "#20202c",
    zoom: "none",
    resize: "none",
    //opacity: '.8',
    fontSize: "15px",
  },
  hidden: {
    display: "none",
  },
};

export default function NavMobile(props) {
  const [hiddenBtnSearch, setHiddenBtnSearch] = React.useState(false);
  const [hiddenNav, setHiddenNav] = React.useState(true);
  const inputElement = React.useRef();

  const handlerHiddenBtnSearch = (e) => {
    setHiddenBtnSearch(!hiddenBtnSearch);
    return false;
  };
  const handlerInputBlur = (e) => {
    if (e.target.value.trim() === "") handlerHiddenBtnSearch(e);
  };
  const handlerInputChange = (e) => {
    if (props.search) props.search(e.target.value.trim());
  };
  const handlerNav = (e) => {
    let el = e.target;
    let id = e.target.id;
    while (id === "") {
      if (el) el = el.parentNode;
      else break;
      id = el.id;
    }
    if (id === "nav") setHiddenNav(false);
    else setHiddenNav(true);
  };
  React.useEffect(() => {
    if (hiddenBtnSearch) inputElement.current.focus();
  }, [hiddenBtnSearch]);

  return (
    <Hidden md lg xl xxl>
      {
        <BarNav
          handlerNav={handlerNav}
          hiddenBtnSearch={hiddenBtnSearch}
          handlerHiddenBtnSearch={handlerHiddenBtnSearch}
          inputElement={inputElement}
          handlerInputBlur={handlerInputBlur}
          handlerInputChange={handlerInputChange}
          dark={props.dark}
          hiddenNav={!hiddenNav}
        />
      }
      <NavElement
        handlerNav={handlerNav}
        link={props.link}
        dark={props.dark}
        hiddenNav={hiddenNav}
        option={props.option}
        setOption={props.setOption}
      />
    </Hidden>
  );
}

function BarNav(props) {
  const {
    handlerNav,
    hiddenBtnSearch,
    handlerHiddenBtnSearch,
    inputElement,
    handlerInputBlur,
    handlerInputChange,
    hiddenNav,
    dark,
  } = props;

  return (
    <div
      className='w3-bar-block w3-margin-bottom w3-row'
      style={dark ? styles.titleDark : styles.titleLight}>
      <div hidden={hiddenNav} className='w3-col s4'>
        <button
          className='w3-btn'
          id='nav'
          onClick={handlerNav}
          style={styles.button}>
          <BsList
            color={dark ? "#eee" : "#111"}
            id='nav'
            className='w3-radio'
          />
        </button>
      </div>

      <div hidden={hiddenNav} className='w3-col s4 w3-center'>
        <div>Dichotomie</div>
      </div>

      <div hidden={hiddenNav} className='w3-right-align w3-col s4'>
        <button
          hidden={hiddenBtnSearch}
          style={styles.button}
          onClick={handlerHiddenBtnSearch}>
          <BsSearch
            fontSize='.8em'
            color={dark ? "#eee" : "#111"}
            className='w3-radio'
          />
        </button>

        <input
          ref={inputElement}
          type={hiddenBtnSearch ? "search" : "hidden"}
          style={styles.input}
          className='w3-input w3-round'
          onBlur={handlerInputBlur}
          onChange={handlerInputChange}
          placeholder='rechercher'
        />
      </div>
    </div>
  );
}
function NavElement(props) {
  const { handlerNav, hiddenNav, option } = props;

  return (
    <div
      hidden={hiddenNav}
      className='w3-animate-top w3-margin-bottom w3-row'
      style={props.dark ? styles.darkNav : styles.lightNav}>
      <div className='w3-col s6'>
        <props.link
          to='/theme'
          className={`${
            option === "theme" ? "w3-blue" : ""
          } w3-round w3-bar-item w3-block w3-btn w3-left-align `}>
          <BsCircleHalf className='w3-radio' />
          <span className='w3-margin-left w3-label'>Thème</span>
        </props.link>

        <props.link
          to='/note'
          className={`${
            option === "note" ? "w3-blue" : ""
          } w3-round w3-bar-item w3-block w3-btn w3-left-align `}>
          <BsBook className='w3-radio' />
          <span className='w3-margin-left w3-label'>Exercice</span>
        </props.link>

        <props.link
          to='/about'
          className={`${
            option === "about" ? "w3-blue" : ""
          } w3-round w3-bar-item w3-block w3-btn w3-left-align `}>
          <BsQuestionCircle className='w3-radio' />
          <span className='w3-margin-left w3-label'>À-propos</span>
        </props.link>
      </div>
      <div className='w3-col s6'>
        <props.link
          to='/home'
          className={`${
            option === "home" ? "w3-blue" : ""
          } w3-btn w3-block w3-right-align w3-round`}>
          <span className='w3-margin-right w3-label'>home</span>
          <BsHouseDoor className='w3-radio' />
        </props.link>
        <span
          onClick={handlerNav}
          className='w3-btn w3-round w3-margin w3-pink w3-display-bottomright w3-small'>
          &times;
        </span>
      </div>
    </div>
  );
}
