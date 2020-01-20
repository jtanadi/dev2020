import css from "styled-jsx/css"

export default css`
#bar-top {
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  color: black;
  background-color: white;
  border-bottom: 1px solid black;
  z-index: 99;
}

#left-bar, #right-bar {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
`
