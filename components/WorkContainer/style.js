import css from "styled-jsx/css"

export default css`
#work-container {
  width: 85%;
  max-width: 1500px;
  margin: 0 auto 3rem auto;
}

ul {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 50% auto;
}

@media (max-width: 1200px),
@media (max-width: 550px) {
  #work-container {
    width: 90%;
  }
}

@media (max-width: 850px) {
  #work-container {
    width: 75%;
  }

  ul {
    grid-template-columns: 100%;
  }
}
`
