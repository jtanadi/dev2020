import style from "./style"
import WorkCard, { WorkInterface } from "../WorkCard"

export default function WorkContainer(props: { works: WorkInterface[] }) {
  const { works } = props
  const emptyWork: WorkInterface = {
    title: "",
    description: "",
    image: "",
    links: [],
    tags: []
  }

  if (works.length % 2 !== 0) {
    works.push(emptyWork)
  }

  return (
    <>
      <div id="work-container">
        <ul>{
          works.map((work, i) => <WorkCard key={`work-${i}`} work={work} />)
        }</ul>
      </div>

      <style jsx>{style}</style>
    </>
  )
}
