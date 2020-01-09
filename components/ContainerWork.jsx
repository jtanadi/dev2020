import useSWR from "swr"
import CardWork from "./CardWork"

function fetcher(url) {
  return fetch(url).then(res => res.json())
}

export default function ContainerWork() {
  const { data, error } = useSWR("/api/getWorks", fetcher)
  if (!data) return null

  return (
    <ul>
      {
        data.map(work => <CardWork key={ work.id } work={work} />)
      }
    </ul>
  )
}
