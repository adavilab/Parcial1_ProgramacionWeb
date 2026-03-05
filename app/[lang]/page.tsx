import Image from "next/image";
import { getDictionary } from './dictionaries';
import Header from "../../src/components/header";
import Link from "next/link";

export default async function Home( {
  params,
  }: {
    params: Promise<{ lang: string }>;
  }) {

  const { lang } = await params;

  const dict = await getDictionary(lang as 'es' | 'en');
  const data = await fetch('https://hp-api.onrender.com/api/characters');
  const posts = await data.json();

  return (
    <div className="flex flex-col col-3 items-center justify-center bg-[#e0e0e0]">
      <main className="">
        <h1>Personajes de Harry Potter</h1>
        <p></p>
        
        <ul>
      {posts.map((post) => (
        
        
        <li key={post.id}>
          {post.name}
         {/* {/* //<Link> */}
          {/* <Image
                      src= {post.image}
                      width={15}
                      height={50}
                      alt="Personje"
                      /> */}
          </li>
        // </Link>  */}
          
      ))}
    </ul>
      </main>
    </div>
  );
}
