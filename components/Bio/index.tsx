import ReactMarkdown from "react-markdown"

import style from "./style"
import ArrowButton from "../ArrowButton"
import TopBar from "../TopBar"

export default function Bio(props: { bio: string }) {
  const { bio } = props
  return (
    <>
      <TopBar />
      <div className="bio-outer-container">
        <div className="bio-content-container">
          <h1>Hello World!</h1>

          {/* Style has to be specified globally for some reason */}
          <ReactMarkdown
            className="bio-markdown"
            source={bio}
          />
        </div>
      </div>
      <ArrowButton />
      <style jsx>{style}</style>
    </>
  )
}
