import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();

  // Define the navigation items with updated SVGs
  const navItems = [
    {
      route: "/login",
      svg: (
        <svg
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="52" cy="34" r="18" stroke="black" strokeWidth="4" />
          <path
            d="M20 86C20 66.4344 34.4344 52 54 52H54C73.5656 52 88 66.4344 88 86"
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      ),
    },
    {
      route: "/plant-details",
      svg: (
        <svg
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52 92C62 82 80 72 80 52C80 35 66 22 52 22C38 22 24 35 24 52C24 72 42 82 52 92Z"
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
          <line x1="52" y1="52" x2="52" y2="22" stroke="black" strokeWidth="4" />
        </svg>
      ),
    },
    {
      route: "/weather-monitoring",
      svg: (
        <svg
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="62" cy="42" r="16" stroke="black" strokeWidth="4" />
          <path
            d="M38 54H80C87 54 92 59 92 66C92 73 87 78 80 78H38C31 78 26 73 26 66C26 59 31 54 38 54Z"
            fill="none"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      ),
    },
    {
      route: "/task-scheduler",
      svg: (
        <svg
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="52" cy="52" r="40" stroke="black" strokeWidth="4" />
          <path d="M52 22V52L72 62" stroke="black" strokeWidth="4" />
        </svg>
      ),
    },
  ];

  return (
    <StyledWrapper>
      <div className="navigation-card">
        {navItems.map((item, index) => (
          <a
            key={index}
            className="tab"
            onClick={() => navigate(item.route)}
            title={item.route.replace("/", "").replace("-", " ").toUpperCase()}
          >
            {item.svg}
          </a>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px 0; /* Increased padding */

  .navigation-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 15px 20px;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    overflow: hidden;
    background-color: rgb(252, 252, 252);
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s;
  }

  .tab:hover {
    background-color: rgb(227, 223, 223);
  }
`;

export default Card;
