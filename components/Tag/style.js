import css from "styled-jsx/css"

export default css`
div {
  font-size: 0.75rem;
  display: inline-block;
  width: auto;
  padding: 0.45rem 0.75rem;
  margin: 0.5rem 0.5rem 0 0;
  background-color: lightgray;
}

div:last-child {
  margin-right: 0;
}

.tag-javascript {
  background-color: #F0DB4F;
}

.tag-node {
  background-color: #68A063;
}

.tag-psql {
  background-color: #007bff;
}

.tag-react {
  background-color: #61DAFB;
}

.tag-redux {
  background-color: #764abc;
}

.tag-python {
  background-color: #2b5b84;
}
`
