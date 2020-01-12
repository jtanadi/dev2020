import style from "./style"

export default function Tag(props: { text: string }) {
  const { text } = props
  return (
    <>
      <div className={ `tag-${text.toLowerCase()}` }>
        { text }
      </div>

      <style jsx>{ style }</style>
    </>
  )
}
