import css from "styled-jsx/css"

export default css`
ul {
  padding: 1rem 5.5rem;
  display: grid;
  grid-template-columns: 48% 48%;
  grid-column-gap: 4%;
}

/*
.work-container {
  height: 80vh ;
}
*/

@media (max-width: 1100px) {
  ul {
    padding: 1rem 2.5rem;
    grid-column-gap: 3.5%;
  }
}

@media (max-width: 820px) {
  ul {
    grid-template-columns: 100%;
    grid-column-gap: 0;
  }
}

@media (max-width: 450px) {
  ul {
    padding: 1rem 1.25rem;
    grid-column-gap: 0;
  }
}
`
