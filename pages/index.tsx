import Bio from "../components/Bio"
import WorkContainer from "../components/WorkContainer"
import BarBottom from "../components/BarBottom"
import BarTop from "../components/BarTop"

interface IndexProps {
  bio: string
}

export default function Index(props: IndexProps) {
  const { bio } = props

  return (
    <div>
      <BarTop />
      <Bio bio={bio} />
      <WorkContainer />
      <BarBottom />
      <style jsx global>{`
        @import url("//hello.myfonts.net/count/3ad56d");

        @font-face {font-family: 'NeueHaasUnicaW1G-Bold';src: url('_fonts/3AD56D_0_0.eot');src: url('_fonts/3AD56D_0_0.eot?#iefix') format('embedded-opentype'),url('_fonts/3AD56D_0_0.woff2') format('woff2'),url('_fonts/3AD56D_0_0.woff') format('woff'),url('_fonts/3AD56D_0_0.ttf') format('truetype');}
         
        @font-face {font-family: 'NeueHaasUnicaW1G-Italic';src: url('_fonts/3AD56D_1_0.eot');src: url('_fonts/3AD56D_1_0.eot?#iefix') format('embedded-opentype'),url('_fonts/3AD56D_1_0.woff2') format('woff2'),url('_fonts/3AD56D_1_0.woff') format('woff'),url('_fonts/3AD56D_1_0.ttf') format('truetype');}
         
        @font-face {font-family: 'NeueHaasUnicaW1G-Regular';src: url('_fonts/3AD56D_2_0.eot');src: url('_fonts/3AD56D_2_0.eot?#iefix') format('embedded-opentype'),url('_fonts/3AD56D_2_0.woff2') format('woff2'),url('_fonts/3AD56D_2_0.woff') format('woff'),url('_fonts/3AD56D_2_0.ttf') format('truetype');}
         
        @font-face {font-family: 'NeueHaasUnicaW1G-UltraLight';src: url('_fonts/3AD56D_3_0.eot');src: url('_fonts/3AD56D_3_0.eot?#iefix') format('embedded-opentype'),url('_fonts/3AD56D_3_0.woff2') format('woff2'),url('_fonts/3AD56D_3_0.woff') format('woff'),url('_fonts/3AD56D_3_0.ttf') format('truetype');}
         
        * {
          box-sizing: border-box;
          font-family: NeueHaasUnicaW1G-Regular, sans-serif;
        }
        
        body {
          margin: 0;
        }

        em {
          font-family: NeueHaasUnicaW1G-Italic;
        }

        p a {
          color: black;
          border-bottom: 1px solid black;
          text-decoration: none;
        }

        p a:hover {
          border-bottom: none;
          box-shadow: 0px 0px 8px black;
        }

        .work-description p {
          margin-top: 0;
          font-size: 1rem;
        }

        .bio-markdown p {
          font-size: 1.25rem;
          margin-top: 0;
        }

        @media (max-width: 550px) {
          .bio-markdown p {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 400px) {
          .bio-markdown p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

Index.getInitialProps = async function () {
  const bio: string = require("../data/bio.md").default
  return { bio }
}
