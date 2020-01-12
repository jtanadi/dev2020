import Bio from "../components/Bio"
import ContainerWork from "../components/ContainerWork"

export default function Index({ bio }) {
  return (
    <div>
      <Bio bio={ bio } />
      <ContainerWork />
      <style jsx global>{ `
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

Index.getInitialProps = async function () {
  const bio: string = require("../data/bio.md").default
  return { bio }
}
