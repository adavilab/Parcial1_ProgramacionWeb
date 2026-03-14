import Image from "next/image";
import { getDictionary } from './dictionaries';
import Header from "../../src/components/header";
import Link from "next/link";
import HpCard from "@/src/components/HpCard";

async function getChars() {
  const data = await fetch('https://hp-api.onrender.com/api/characters');
  const posts = await data.json();
  return posts.slice(0, 12);
}

export default async function Home( {
  params,
  }: {
    params: Promise<{ lang: string }>;
  }) {

  const { lang } = await params;
  const dict = await getDictionary(lang as 'es' | 'en');
  const chars = await getChars();

  return (
    <div className="flex flex-col items-center bg-[#e0e0e0] pt-4 min-h-screen">
      <main className="h-full ">
        <h1 className="text-center text-[#FDB608] font-bold text-xl">{dict.main.title}</h1>
        <p className="text-center text-sm">{dict.main.subtitle}.</p>

        <div className="grid grid-cols-3 gap-4 justify-between">
          {chars.map((char: any) => (
            <HpCard key={char.id} character={char} lang={lang} />
          ))}
        </div>

      </main>
    </div>
  );
}
