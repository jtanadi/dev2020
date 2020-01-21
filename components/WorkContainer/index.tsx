import useSWR from "swr"

import style from "./style"
import WorkCard, { WorkInterface } from "../WorkCard"

async function fetcher(url: string): Promise<WorkInterface[]> {
  return fetch(url).then(res => res.json())
}

export default function WorkContainer() {
  const { data, error } = useSWR("/api/getWorks", fetcher)

  if (!data || error) return null

  // Add empty work for prettier tiling
  const emptyWork: WorkInterface = {
    title: "",
    description: "",
    image: "",
    links: [],
    tags: []
  }

  if (data.length % 2 !== 0) {
    data.push(emptyWork)
  }

  return (
    <>
      <div id="work-container">
        <ul>{
          data.map((work, i) => <WorkCard key={`work-${i}`} work={work} />)
        }</ul>
      </div>

      <style jsx>{style}</style>
    </>
  )
}
