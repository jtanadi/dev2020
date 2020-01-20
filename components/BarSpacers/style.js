import css from "styled-jsx/css"

export default css`
.spacer {
  width: 1rem;
  height: 1rem;
  position: fixed;
  background-color: white;
}

.top {
  top: calc(3rem - 0.5rem);
}

.bottom {
  bottom: calc(3rem - 0.5rem);
}

.left {
  left: calc(7.5% - 0.5rem);
}

.middle {
  left: calc(50% - 0.5rem);
}

.right {
  right: calc(7.5% - 0.5rem);
}
`
