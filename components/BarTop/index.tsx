import ButtonLinkFlex from "../ButtonLinkFlex"

import style from "./style"
import BarSpacers from "../BarSpacers"

export default function BarTop() {
  return (
    <>
      <div id="bar-top">
        <BarSpacers location="top" />
        <div id="buttons-container">
          <ButtonLinkFlex
            id="left-button"
            link={{ url: "/docs/JesenTanadi_Resume.pdf", name: "Resume" }}
          />
          <ButtonLinkFlex
            id="right-button"
            link={{ url: "mailto:mail@jesentanadi.com", name: "Email" }}
            target="_self"
          />
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  )
}
