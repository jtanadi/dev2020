import css from "styled-jsx/css"

export default css`
.spacer {
  width: 20px;
  height: 20px;
  position: fixed;
  background-color: white;
}

.top {
  top: calc(3rem - 10px);
}

.bottom {
  bottom: calc(3rem - 10px);
}

.left {
  left: calc(7.5% - 10px);
}

.middle {
  left: calc(50% - 10px);
}

.right {
  right: calc(7.5% - 10px);
}
`
