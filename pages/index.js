import Head from "next/head";
import Layout from "../components/layout";
import Profile from "../components/Profile/profile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Styled Form</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jyh4wlw.css" />
      </Head>
      <Layout>
        <main>
          <Profile />
        </main>
      </Layout>
    </div>
  );
}
