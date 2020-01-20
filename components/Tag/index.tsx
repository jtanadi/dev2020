import style from "./style"

const classifyTag = (tag: string): string => {
  return tag
    .split("")
    .filter((l: string) => l.match(/^[a-z0-9]+$/i))
    .join("")
    .toLowerCase()
}

export default function Tag(props: { text: string }) {
  const { text } = props
  return (
    <>
      <div className={`tag-${classifyTag(text)}`}>
        {text}
      </div>

      <style jsx>{style}</style>
    </>
  )
}
