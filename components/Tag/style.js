import css from "styled-jsx/css"

export default css`
div {
  font-size: 0.72rem;
  display: inline-block;
  width: auto;
  padding: 0.4rem 0.65rem calc(0.4rem - 2px) 0.65rem;
  margin: 0.5rem 0.5rem 0 0;
  border-bottom: 2px solid black;
}

div:last-child {
  margin-right: 0;
}

.tag-html {
  border-bottom-color: #e34c26;
}

.tag-css {
  border-bottom-color: #563d7c;
}

.tag-javascript {
  border-bottom-color: #F0DB4F;
}

.tag-typescript {
  border-bottom-color: ##2b7489;
}

.tag-node {
  border-bottom-color: #68A063;
}

.tag-express {
  border-bottom-color: #lightgray;
}

.tag-psql {
  border-bottom-color: #007bff;
}

.tag-react {
  border-bottom-color: #61DAFB;
}

.tag-redux {
  border-bottom-color: #764abc;
}

.tag-python {
  border-bottom-color: #2b5b84;
}

.tag-ruby {
  border-bottom-color: #701516;
}

.tag-wip {
  border-bottom-color: pink;
}
`
