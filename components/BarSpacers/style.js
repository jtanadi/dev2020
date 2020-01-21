import css from "styled-jsx/css"

export default css`
.spacer-container {
  width: 85%;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
}

.spacer {
  width: 1rem;
  height: 1rem;
  position: absolute;
  background-color: white;
  z-index: 50;
}

.top {
  top: calc(3rem - 0.5rem);
}

.bottom {
  bottom: calc(-0.5rem);
}

.left {
  left: calc(-0.5rem);
}

.middle {
  left: calc(50% - 0.5rem);
}

.right {
  right: calc(-0.5rem);
}

@media (max-width: 1200px) {
  .spacer-container {
    width: 90%;
  }
}

@media (max-width: 850px) {
  .spacer-container {
    width: 75%;
  }

  .bottom.middle {
    display: none;
  }

  .top.middle {
    height: 0.5rem
  }
}

@media (max-width: 550px) {
  .spacer-container {
    width: 90%;
  }
}
`
