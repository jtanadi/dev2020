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

@media (max-width: 1200px) {
  .left {
    left: calc(5% - 0.5rem)
  }

  .right {
    right: calc(5% - 0.5rem)
  }
}

@media (max-width: 850px) {
  .left {
    left: calc(12.5% - 0.5rem)
  }

  .middle {
    display: none;
  }

  .right {
    right: calc(12.5% - 0.5rem)
  }
}

@media (max-width: 550px) {
  .left {
    left: calc(5% - 0.5rem)
  }

  .right {
    right: calc(5% - 0.5rem)
  }
}
`
