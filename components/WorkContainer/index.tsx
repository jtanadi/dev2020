import useSWR from "swr"

import style from "./style"
import WorkCard, { WorkInterface } from "../WorkCard"

async function fetcher(url: string): Promise<WorkInterface[]> {
  return fetch(url).then(res => res.json())
}

export default function WorkContainer() {
  const { data, error } = useSWR("/api/getWorks", fetcher)

  if (!data || error) return null

  return (
    <>
      <div id="work-container">
        <ul>{
          data.map(work => <WorkCard key={work.id} work={work} />)
        }</ul>
      </div>

      <style jsx>{style}</style>
    </>
  )
}
