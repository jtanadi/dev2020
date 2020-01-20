import css from "styled-jsx/css"

export default css`
ul {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 50% auto;
}

#work-container {
  width: 85%;
  max-width: 1500px;
  margin: 0 auto calc(3rem - 1px) auto;
}

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
