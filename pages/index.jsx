import ReactMarkdown from "react-markdown"
import ContainerWork from "../components/ContainerWork"

export default function Index({ bio }) {
  if (!bio) return null
  return (
    <div>
      <ReactMarkdown source={ bio } />
      <ContainerWork />
    </div>
  )
}

Index.getInitialProps = async function() {
  const content = require("../content/bio.md")
  return { bio: content.default }
}

