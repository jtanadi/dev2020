import css from "styled-jsx/css"

export default css`
.button-container {
  flex: 1;
  margin: 0.5rem 0.5rem 0 0;
  max-width: 33.3%;
  position: relative;
}

.button-container:last-child {
  margin-right: 0;
}

button {
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  border: none;
  color: black;
  background-color: white;
  cursor: pointer;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

button:hover {
  box-shadow: 0px 0px 8px black;
  border: 0;
}
`
