import ButtonLink, { LinkInterface } from "../ButtonLink"
import Tag from "../Tag"

import style from "./style"

export interface WorkInterface {
  id: number
  title: string
  description: string
  image: string
  links: LinkInterface[]
  tags: string[]
}

export default function CardWork(props: { work: WorkInterface }) {
  const { work: { title, description, image, links, tags } } = props
  return (
    <>
      <div>
        <h2>{ title }</h2>
        <p>{ description }</p>
        <img src={ image } />
        <ul>{
          links ? links.map(link => <ButtonLink key={ link.id } link={ link } />) : null
        }</ul>
        <ul>{
          tags ? tags.map((tag, i) => <Tag key={ i } text={ tag } />) : null
        }</ul>
      </div>
      <style jsx>{ style }</style>
    </>
  )
}
