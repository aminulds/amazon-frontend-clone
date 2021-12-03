import Head from "next/head";
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Frontend Clone</title>
      </Head>

      {/* Header */}
      <Header />
    </div>
  );
}
