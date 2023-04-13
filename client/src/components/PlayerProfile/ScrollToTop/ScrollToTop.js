import React from 'react';
import { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { ReactComponent as TopArrowIcon } from './TopArrowIcon.svg';

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
          setShowTopBtn(true);
      } else {
          setShowTopBtn(false);
      }
    });
  }, []);

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="ScrollToTop">
      {showTopBtn &&
        <button
          className="ScrollToTopBtn"
          onClick={goToTop}
        >
          <TopArrowIcon />
        </button>
      }
    </div>
  );
}

export default ScrollToTop;