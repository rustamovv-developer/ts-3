import Adidas from "@/components/adidas/Adidas";
import Feat from "@/components/feat/Feat";
import Fs from "@/components/fs/Fs";
import Header from "@/components/header/Header";
import News from "@/components/news/News";
import Products from "@/components/products/Products";
import Search from "@/components/search/Search";
import Support from "@/components/support/Support";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <Header />
      <Fs />
      <Products data={data} />
      <Adidas />
      <Support />
      <News />
      <Feat />
      <Search />
    </main>
  );
}
