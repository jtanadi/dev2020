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
    const offsetHeight = document.getElementById("bar-top").clientHeight
    const targetLocation: number = document.getElementById("work-container").offsetTop

    const scrollLocation: number = (down) ? targetLocation - offsetHeight : 0
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
