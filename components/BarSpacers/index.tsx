import style from "./style"

export default function BarSpacers(props: { location: string }) {
  const { location } = props

  if (location !== "top" && location !== "bottom") {
    throw new Error("Only two options for location")
  }

  return (
    <>
      <div className="spacer-container">
        <div className={`spacer ${location} left`}></div>
        <div className={`spacer ${location} middle`}></div>
        <div className={`spacer ${location} right`}></div>
      </div>

      <style jsx>{style}</style>
    </>
  )
}
