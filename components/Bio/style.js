import css from "styled-jsx/css"

export default css`
h1 {
  font-size: 7.5rem;
  font-family: 'NeueHaasUnicaW1G-Bold';
  letter-spacing: -7px;
  line-height: 0.95;
  margin-top: 0;
}

.bio-outer-container {
  width: 100%;
  height: calc(100vh - 6rem + 1px);
  margin-top: 3rem;
  align-items: center;
  color: black;
  background-color: white;
  border-bottom: 1px solid black;
}

.bio-content-container {
  width: 85%;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.75rem;
  display: grid;
  grid-template-columns: 50% auto;
  overflow: hidden;
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
`
