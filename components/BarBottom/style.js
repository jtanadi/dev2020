import css from "styled-jsx/css"

export default css`
#bar-bottom {
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background-color: white;
  border-top: 1px solid black;
  color: black;
}

#bar-bottom button {
  width: 85%;
  height: 100%;
  padding: 0;
  background-color: white;
  border: 0;
  border-left: 1px solid black;
  border-right: 1px solid black;
  font-size: 1rem;
}

@media (max-width: 1200px) {
  #bar-bottom button {
    width: 90%;
  }
}

@media (max-width: 850px) {
  #bar-bottom button {
    width: 75%;
  }
}

@media (max-width: 550px) {
  #bar-bottom button {
    width: 90%;
  }
}
`
