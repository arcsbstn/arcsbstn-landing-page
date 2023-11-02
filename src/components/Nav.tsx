import { useContext } from "react";
import styled from "styled-components";

import { MediaWidthContext } from "../ResumePortfolio";

const NavWrapper = styled.div<{ isExtraLargeView: boolean }>`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-items: center;
  justify-content: space-between;
  padding: 1.5em 2em;
  background-color: #fff;
  border-bottom: 1px dotted #ccc;
  width: ${(props) => (props.isExtraLargeView ? "1100px" : "100%")};
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 1em;
`;

export function Nav() {
  const { isExtraLargeView } = useContext(MediaWidthContext);
  return (
    <NavWrapper isExtraLargeView={isExtraLargeView}>
      <div></div>
      <NavUl>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Theme Toggle</li>
      </NavUl>
    </NavWrapper>
  );
}
