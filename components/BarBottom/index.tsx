import { useState, useEffect } from "react"

import style from "./style"
import BarSpacers from "../BarSpacers"

/*
interface PropsInterface {
  scrollTarget: HTMLElement
  offsetElement?: HTMLElement
}
 */

enum Direction {
  UP, DOWN
}

export default function BarBottom() {
  const [direction, setDirection] = useState(Direction.DOWN)
  useEffect(() => {
    const listenerAction = (): void => {
      const offsetHeight: number = document.getElementById("bar-top").clientHeight
      const targetLocation: number = document.getElementById("work-container").offsetTop - offsetHeight
      if (window.scrollY >= targetLocation) {
        setDirection(Direction.UP)
      } else {
        setDirection(Direction.DOWN)
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
      setButtonText(direction === Direction.DOWN ? "Projects" : "About")
    } else {
      setButtonText(direction === Direction.DOWN ? "▼" : "▲")
    }
  }, [direction, mouseOver])

  const handleMouseOver = (): void => setMouseOver(true)
  const handleMouseLeave = (): void => setMouseOver(false)

  const handleClick = (): void => {
    const offsetHeight: number = document.getElementById("bar-top").clientHeight
    const targetLocation: number = document.getElementById("work-container").offsetTop - offsetHeight
    const scrollLocation: number = direction === Direction.DOWN ? targetLocation : 0
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
        <div id="button-container">
          <button
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  )
}
