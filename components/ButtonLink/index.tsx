import style from "./style"

export interface LinkInterface {
  id: number
  url: string
  name: string
}

export default function ButtonLink(props: { link: LinkInterface }) {
  const { link } = props
  return (
    <>
      <a href={ link.url } target="_blank">
        <button>
          { link.name }
        </button>
      </a>

      <style jsx>{ style }</style>
    </>
  )
}
