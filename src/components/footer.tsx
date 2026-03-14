import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Footer({ lang }: { lang: string }){
    const dict = await getDictionary(lang as 'en' | 'es');

    return(
      <footer className="sticky bottom-0 w-full bg-[#BBCCBB] h-10 font-bold flex items-center justify-around">
        <p>{dict.footer.rights}</p>
        <p>{dict.footer.developed}</p>
      </footer>
        );

}