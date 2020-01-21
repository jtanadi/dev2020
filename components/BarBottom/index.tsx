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
      <div
        className="bar-bottom"
        onClick={handleClick}
      >
        <BarSpacers location="bottom" />
        {down ? "down" : "up"}
      </div>
      <style jsx>{style}</style>
    </>
  )
}