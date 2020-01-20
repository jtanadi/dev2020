import style from "./style"
import BarSpacers from "../BarSpacers"

export default function BarTop() {
  return (
    <>
      <div id="bar-top">
        <BarSpacers location="top" />
        <div id="left-bar">left</div>
        <div id="right-bar">right</div>
      </div>
      <style jsx>{style}</style>
    </>
  )
}
