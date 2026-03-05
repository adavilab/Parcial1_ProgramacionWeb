import Image from 'next/image';
import Link from 'next/link';

export default function Header(){
    
    return(
    <header className="sticky top-0 w-full bg-[#FDB608] h-20 flex justify-center">
        <div className="">
            <div>
            <Image
            src="http://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
            width={100}
            height={50}
            alt="Logo Harry Potter"
            />

            <Link className='text-bold justsify-center gap-2'
              href="/es" 
            >
              ES
            </Link>
            <Link 
              href="/en"
            >
              EN
            </Link>
            </div>
        </div>

    </header>
    );
    
}