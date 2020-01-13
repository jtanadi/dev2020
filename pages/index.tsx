import Bio from "../components/Bio"
import ContainerWork from "../components/ContainerWork"

export default function Index(props: { bio: string }) {
  const { bio } = props
  return (
    <div>
      <Bio bio={ bio } />
      <ContainerWork />
      <style jsx global>{ `
         @import url("//hello.myfonts.net/count/3ad566");
         @import url("//hello.myfonts.net/count/3ad567");

        @font-face {font-family: 'NeueHaasUnicaW1G-Bold';src: url('_fonts/3AD566_0_0.eot');src: url('_fonts/3AD566_0_0.eot?#iefix') format('embedded-opentype'),url('_fonts/3AD566_0_0.woff2') format('woff2'),url('_fonts/3AD566_0_0.woff') format('woff'),url('_fonts/3AD566_0_0.ttf') format('truetype');}
         
        @font-face {font-family: 'NeueHaasUnicaW1G-Italic';src: url('_fonts/3AD566_1_0.eot');src: url('_fonts/3AD566_1_0.eot?#iefix') format('embedded-opentype'),url('_fonts/3AD566_1_0.woff2') format('woff2'),url('_fonts/3AD566_1_0.woff') format('woff'),url('_fonts/3AD566_1_0.ttf') format('truetype');}
         
        @font-face {font-family: 'NeueHaasUnicaW1G-Regular';src: url('_fonts/3AD566_2_0.eot');src: url('_fonts/3AD566_2_0.eot?#iefix') format('embedded-opentype'),url('_fonts/3AD566_2_0.woff2') format('woff2'),url('_fonts/3AD566_2_0.woff') format('woff'),url('_fonts/3AD566_2_0.ttf') format('truetype');}
         
      @font-face {font-family: 'NeueHaasUnicaW1G-UltraLight';src: url('_fonts/3AD567_0_0.eot');src: url('_fonts/3AD567_0_0.eot?#iefix') format('embedded-opentype'),url('_fonts/3AD567_0_0.woff2') format('woff2'),url('_fonts/3AD567_0_0.woff') format('woff'),url('_fonts/3AD567_0_0.ttf') format('truetype');}
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
      `}</style>
    </div>
  )
}

Index.getInitialProps = async function () {
  const bio: string = require("../data/bio.md").default
  return { bio }
}
