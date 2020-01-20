import style from "./style"

export default function BarSpacers(props: { location: string }) {
  const { location } = props

  if (location !== "top" && location !== "bottom") {
    throw new Error("Only two options for location")
  }

  return (
    <>
      <div className={`${location} spacer left`}></div>
      <div className={`${location} spacer middle`}></div>
      <div className={`${location} spacer right`}></div>

      <style jsx>{style}</style>
    </>
  )
}
