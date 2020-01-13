import css from "styled-jsx/css"

export default css`
div {
  font-size: 0.72rem;
  display: inline-block;
  width: auto;
  padding: 0.4rem 0.7rem;
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

.tag-express {
  background-color: #lightgray;
}

.tag-psql {
  color: white;
  background-color: #007bff;
}

.tag-react {
  background-color: #61DAFB;
}

.tag-redux {
  color: white;
  background-color: #764abc;
}

.tag-python {
  color: white;
  background-color: #2b5b84;
}

.tag-socketio,
.tag-robofont {
  color: white;
  background-color: black;
}
`
