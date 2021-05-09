import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests';

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>FootballWeb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav results={results} />

      <Results results={results} />

    </div>
  );
}

export async function getServerSideProps(context) {

  const id = context.query.id;
  const top5Arr = ["ENGLAND: Premier League","GERMANY: Bundesliga", "SPAIN: La Liga", "ITALY: Serie A", "FRANCE: Ligue 1"]

  let data = await fetch(`https://www.scorebat.com/video-api/v1/`).then((res) => res.json());

  if (id == null && id == undefined || id === "Home") {
    data = data.filter(d => top5Arr.includes(d.competition.name))
  } else {
    data = data.filter(d => d.competition.id == id);
  }

  return {
    props: {
      results: data,
    },
  };
}

