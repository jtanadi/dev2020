export default function ButtonLink({ link }) {
  return (
    <div className="link-button">
      <a href={ link.url } target="_blank">
        { link.name }
      </a>

    <style jsx>{`
      .link-button {
        background-color: dodgerblue;
        color: white;
      }
    `}</style>
    </div>
  )
}
