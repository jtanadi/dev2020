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

.bio-outer-container {
  width: 100%;
  height: calc(100vh - 7rem + 1px);
  align-items: center;
  margin-top: 4rem;
  color: black;
  background-color: white;
  border-bottom: 1px solid black;
}

.bio-content-container {
  width: 85%;
  height: 100%;
  margin: 0 auto;
  padding: 1.75rem;
  display: grid;
  grid-template-columns: 50% auto;
  overflow: hidden;
  border-left: 1px solid black;
  border-right: 1px solid black;
}
`
