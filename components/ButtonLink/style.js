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

/*
button {
  width: 100%;
  height: 40px;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
*/

button {
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  border: none;
  color: white;
  background-color: dodgerblue;
  box-shadow: 0px 0px 8px lightgray;
  cursor: pointer;
}

button:hover {
  color: dodgerblue;
  background-color: white;
  box-shadow: 0px 0px 8px dodgerblue;
}
`
