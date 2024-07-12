import styles from "./Main.module.css";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Navigater } from "@/components/Navigater";
import { Canvas } from "@/components/Canvas";
import { Footer } from "@/components/Footer";

const ITEMS = [
  { href: "./", title: "Welcome" },
  {
    href: "./photo.html",
    title: "photo",
  },
  {
    href: "https://toy-poodle-four.net",
    title: "blog",
  },
  {
    href: "./link.html",
    title: "link",
  },
];

export const Main = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>toy poodle four test page</title>
      </Head>
      <Header />
      <Navigater items={ITEMS} />
      <Canvas />
      <Footer />
    </main>
  );
};
