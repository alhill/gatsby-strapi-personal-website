import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const SelectLanguage = (props) => {
  const links = props.langs.filter(lang => !lang.selected).map(lang =>
    <Link className="btnidioma" to={lang.link} key={lang.langKey} style={{
      backgroundColor: lang.langKey === "es" ? "rgba(255, 255, 255, 0.9)" : "rgba(16, 16, 255, 0.9)",
      color: lang.langKey === "es" ? "rgb(0, 0, 255)" : "rgb(255, 255, 255)"
    }}>
      <span>{ lang.langKey }</span>
    </Link>
  );
    // <Link to={lang.link} key={lang.langKey} style={{
    //   color: 'white'
    // }}>
  //     <div className={`banderita ${lang.langKey}`}></div>
  //   </Link>
  // );
  return links
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;