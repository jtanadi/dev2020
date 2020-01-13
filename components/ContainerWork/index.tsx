import useSWR from "swr"

import style from "./style"
import CardWork, { WorkInterface } from "../CardWork"

function fetcher(url: string): Promise<WorkInterface[]> {
  return fetch(url).then(res => res.json())
}

export default function ContainerWork() {
  const { data, error } = useSWR("/api/getWorks", fetcher)

  if (!data || error) {
    console.log(error)
    return null
  }

  return (
    <>
      <div className="work-container">
        <ul>{
          data.map(work => <CardWork key={ work.id } work={ work } />)
        }</ul>
      </div>

      <style jsx>{ style }</style>
    </>
  )
}
