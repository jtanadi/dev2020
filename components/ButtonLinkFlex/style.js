import css from "styled-jsx/css"

export default css`
.button-container {
  flex: 1;
}

#left-button, #right-button {
  border-right: 1px solid black;
  background-color: red;
}

#left-button {
  border-left: 1px solid black;
}

button {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: 1rem;
  background-color: white;
  border: 0;
}
`
