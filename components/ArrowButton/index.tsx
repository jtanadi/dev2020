import { useState, useEffect } from "react"

import style from "./style"
import RowSpacers from "../RowSpacers"

export default function DownButton() {
  const [down, setDown] = useState(true)
  useEffect(() => {
    const listenerAction = (): void => {
      const midViewHeight: number = window.innerHeight / 2
      const midPageHeight = document.body.scrollHeight / 2

      if (window.scrollY + midViewHeight > midPageHeight) {
        setDown(false)
      } else {
        setDown(true)
      }
    }

    document.addEventListener("scroll", listenerAction)

    return () => {
      document.removeEventListener("scroll", listenerAction)
    }
  }, [])

  const handleClick = (): void => {
    const topBar = document.getElementById("top-bar")
    const workContainer = document.getElementById("work-container")
    const topOfWork: number = workContainer.offsetTop - topBar.clientHeight
    const scrollLocation: number = (down) ? topOfWork : 0
    window.scroll({
      top: scrollLocation,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <div
        className="arrow-button"
        onClick={handleClick}
      >
        <RowSpacers location="bottom" />
        {down ? "V" : "A"}
      </div>
      <style jsx>{style}</style>
    </>
  )
}
