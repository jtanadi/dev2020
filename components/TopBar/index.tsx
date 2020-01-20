import style from "./style"
import RowSpacers from "../RowSpacers"

export default function TopBar() {
  return (
    <>
      <div id="top-bar">
        <RowSpacers location="top" />
        <div id="left-bar">left</div>
        <div id="right-bar">right</div>
      </div>
      <style jsx>{style}</style>
    </>
  )
}
