import css from "styled-jsx/css"

export default css`
h1 {
  font-size: 7.5rem;
  font-family: 'NeueHaasUnicaW1G-Bold';
  margin-top: 0;
  letter-spacing: -5px;
  line-height: 0.95;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  display: flex;
}

.bio-container {
  display: flex;
  align-items: center;
  height: calc(100vh - 5rem);
  padding: 0 10rem;
  color: white;
  background-color: black;
}

.bio-content {
  display: grid;
  grid-template-columns: 50% auto;
  overflow: hidden;
}

.bio-markdown {
  grid-column-start: 2;
  grid-column-end: 3;
}

.divider {
  height: 5rem;
  background-color: black;
  position: relative;
}
`
