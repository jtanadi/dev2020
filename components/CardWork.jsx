import ButtonLink from "./ButtonLink"

export default function CardWork({ work }) {
  return (
    <div>
      <h2>{ work.title }</h2>
      <p>{ work.description }</p>
      <ul>{
        work.links.map(link => <ButtonLink key={ link.id } link={ link } />)
      }</ul>
    </div>
  )
}
