import css from "styled-jsx/css"

export default css`
h2 {
  font-size: 1.75rem;
  margin: -.25rem 0 0.5rem 0;
  font-family: NeueHaasUnicaW1G-UltraLight;
}

.description {
  margin-top: 0;
  font-size: 1rem;
}

ul {
  padding-left: 0;
}

img {
  width: 100%;
  display: inline-block;
}

.card-container {
  flex: 1;
  width: 100%;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 48.5% 48.5%;
  grid-template-rows: 2.75rem auto;
  grid-column-gap: 3%;
  align-items: start;
  box-shadow: 0 0 8px lightgray;
}

.left {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.right {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}

.card-container h2 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.button-container {
  display: flex;
  flex-direction: row;
}

.tag-container {
  margin-top: 0.5rem;
}

@media (max-width: 1030px) {
  .card-container {
    grid-template-columns: 43.5% 53.5%;
  }
}

@media (max-width: 800px) {
  .card-container {
    grid-template-columns: 48.5% 48.5%;
  }
}

@media (max-width: 450px) {
  .card-container {
    display: block;
  }

  .tag-container {
    display: none;
  }

  .description {
    margin-top: 0.75rem;
  }
}
`
