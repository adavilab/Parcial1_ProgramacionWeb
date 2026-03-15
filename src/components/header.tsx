import Image from 'next/image';
import Link from 'next/link';

export default function Header({ lang }: { lang: string }){
    
    return(
    <header className="sticky top-0 w-full bg-[#FDB608] h-20 flex justify-center z-50">
        <div className="flex flex-col items-center pt-2">
            
            <Link href="/">
            <Image
            src="http://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
            width={150}
            height={100}
            alt="Logo Harry Potter"
            />
            </Link>

          <div className='flex gap-2 text-xs text-white'>
            <Link
              href="/en" 
              className={lang === 'en' ? 'font-bold' : ''}
            >
              EN
            </Link>
            <Link 
              href="/es"
              className={lang === 'es' ? 'font-bold' : ''}
            >
              ES
            </Link>
            </div>
        </div>

    </header>
    );
    
}