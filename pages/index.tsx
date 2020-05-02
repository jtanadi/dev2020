import Head from "next/head";

import BarTop from "../components/BarTop";
import BarBottom from "../components/BarBottom";
import Bio from "../components/Bio";
import { WorkInterface } from "../components/WorkCard";
import WorkContainer from "../components/WorkContainer";

interface IndexPropsInterface {
  bio: string;
  works: WorkInterface[];
}

export default function Index(props: IndexPropsInterface) {
  return (
    <div>
      <Head>
        <title>Jesen Tanadi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Jesen Tanadi's dev portfolio" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <BarTop />
      <Bio bio={props.bio} />
      <WorkContainer works={props.works} />
      <BarBottom />
    </div>
  );
}

Index.getInitialProps = async function () {
  // Statically-load all content
  const bio = require("../data/bio.md").default;
  const works = require("../data/works.json");
  return { bio, works };
};
