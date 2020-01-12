import css from "styled-jsx/css"

export default css`
.bio-container {
  display: flex;
  align-items: center;
  height: 95vh;
  padding: 0 10rem;
  flex-direction: row;
  background-color: dodgerblue;
  position: relative;
}

.bio {
  display: grid;
  grid-template-columns: 45% auto;
  overflow: hidden;
}

.bio > h1 {
  font-size: 4rem;
  font-family: 'NeueHaasUnicaW1G-Thin';
  margin-top: 0;
  grid-column-start: 1;
  grid-column-end: 2;
}

.bio-content {
  grid-column-start: 2;
  grid-column-end: 3;
}
`
