import { useState, useEffect } from "react"

import style from "./style"

export default function DownButton() {
  const [arrow, setArrow] = useState("down")
  useEffect(() => {
    const listenerAction = (): void => {
      const midViewHeight: number = window.innerHeight / 2
      const midPageHeight = document.body.scrollHeight / 2

      if (window.scrollY + midViewHeight > midPageHeight) {
        setArrow("up")
      } else {
        setArrow("down")
      }
    }

    document.addEventListener("scroll", listenerAction)

    return () => {
      document.removeEventListener("scroll", listenerAction)
    }
  }, [])

  const handleClick = () => {
    const scrollLocation: number = (arrow === "down")
      ? document.body.scrollHeight
      : 0

    window.scroll({
      top: scrollLocation,
      left: 0,
      behavior: "smooth"
    })

  }

  return (
    <>
      <div className="arrow-button" onClick={ handleClick }>
        { arrow === "down" ? "V" : "A" }
      </div>
      <style jsx>{ style }</style>
    </>
  )
}
