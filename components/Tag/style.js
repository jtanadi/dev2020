import css from "styled-jsx/css"

export default css`
div {
  display: inline-block;
  width: auto;
  padding: 0.5rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  background-color: lightgray;
}

div:last-child {
  margin-right: 0;
}

.tag-javascript {
  background-color: #F0DB4F;
}

.tag-react {
  background-color: #61DAFB;
}

.tag-node {
  background-color: #68A063;
}

.tag-redux {
  background-color: #764abc;
}
`
