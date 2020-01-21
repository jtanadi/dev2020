import css from "styled-jsx/css"

export default css`
h1 {
  font-size: 7.5rem;
  font-family: 'NeueHaasUnicaW1G-Bold';
  letter-spacing: -5px;
  line-height: 0.95;
  margin-top: 0;
}

.bio-outer-container {
  width: 100%;
  margin-top: 3rem;
  align-items: center;
  color: black;
  background-color: white;
  border-bottom: 1px solid black;
}

.bio-content-container {
  width: 85%;
  max-width: 1500px;
  min-height: calc(100vh - 6rem + 1px);
  margin: 0 auto;
  padding: 0 1.75rem;
  display: grid;
  grid-template-columns: 50% auto;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.left-col, .right-col {
  padding: 1.75rem 0;
}

.left-col {
  grid-column-start: 1;
  grid-column-end: 2;
  border-right: 1px solid black;
}

.right-col {
  padding-left: 1.75rem;
  grid-column-start: 2;
  grid-column-end: 3;
}

@media (max-width: 1200px) {
  h1 {
    font-size: 6rem;
    letter-spacing: -4px;
  }
  .bio-content-container {
    width: 90%;
  }
}

@media (max-width: 850px) {
  h1 {
    font-size: 5rem;
    letter-spacing: -3px;
    margin-bottom: 2rem;
  }

  .bio-content-container {
    width: 75%;
  }

  .left-col {
    grid-column-start: 1;
    grid-column-end: 3;
    border-right: none;
    padding-bottom: 0;
  }

  .right-col {
    padding-left: 0;
    padding-top: 0;
    grid-column-start: 1;
    grid-column-end: 3;
  }
}

@media (max-width: 550px) {
  h1 {
    font-size: 4rem;
    letter-spacing: -2px;
  }

  .bio-content-container {
    width: 90%;
  }
}

@media (max-width: 400px) {
  h1 {
    font-size: 3.25rem;
    letter-spacing: -2px;
    margin-bottom: 1rem;
  }
}
`
