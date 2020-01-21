import { useState, useEffect } from "react"

import style from "./style"
import BarSpacers from "../BarSpacers"

/*
interface PropsInterface {
  scrollTarget: HTMLElement
  offsetElement?: HTMLElement
}
 */

export default function BarBottom() {
  const [down, setDown] = useState(true)
  useEffect(() => {
    const listenerAction = (): void => {
      const offsetHeight: number = document.getElementById("bar-top").clientHeight
      const targetLocation: number = document.getElementById("work-container").offsetTop - offsetHeight
      if (window.scrollY >= targetLocation) {
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

  const [buttonText, setButtonText] = useState("")
  const [mouseOver, setMouseOver] = useState(false)
  useEffect(() => {
    if (!mouseOver) {
      setButtonText(down ? "Projects" : "About")
    } else {
      setButtonText(down ? "▼" : "▲")
    }
  }, [down, mouseOver])

  const handleMouseOver = (): void => setMouseOver(true)
  const handleMouseLeave = (): void => setMouseOver(false)

  const handleClick = (): void => {
    const offsetHeight: number = document.getElementById("bar-top").clientHeight
    const targetLocation: number = document.getElementById("work-container").offsetTop - offsetHeight
    const scrollLocation: number = (down) ? targetLocation : 0
    window.scroll({
      top: scrollLocation,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <div id="bar-bottom">
        <BarSpacers location="bottom" />
        <button
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </button>
      </div>
      <style jsx>{style}</style>
    </>
  )
}
