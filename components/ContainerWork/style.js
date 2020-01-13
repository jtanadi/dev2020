import css from "styled-jsx/css"

export default css`
ul {
  padding: 1rem 6rem;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2%;
  grid-column-row: 10vh;
}

/*
.work-container {
  height: 80vh ;
}
*/

@media (max-width: 1100px) {
  ul {
    padding: 1rem;
  }
}

@media (max-width: 800px) {
  ul {
    grid-template-columns: 100%;
    grid-column-gap: 0;
  }
}
`
