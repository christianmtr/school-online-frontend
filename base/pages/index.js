import Head from "next/head";
import Dashboard from "../components/dashboad";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>School</title>
      </Head>
      <Dashboard />
    </>
  );
};
