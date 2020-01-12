import ReactMarkdown from "react-markdown"

interface BioProps {
  bio: string
}

export default function Bio(props: BioProps) {
  const { bio } = props
  return (
    <ReactMarkdown source={ bio } />
  )
}
