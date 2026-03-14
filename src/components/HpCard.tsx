// src/components/CharacterCard.tsx
import Image from "next/image";
import Link from "next/link";

// Colores requeridos por el parcial 
const BgColorHouses: any = {
  Gryffindor: 'bg-[#740001]',
  Slytherin: 'bg-[#1A472A]',
  Ravenclaw: 'bg-[#0E1A40]',
  Hufflepuff: 'bg-[#FFD800]',
  NoHouse: 'bg-[#D1D5DB]',
};

export default function HpCard({ character, lang }: { character: any, lang: string }) {
  const houseColor = BgColorHouses[character.house] || BgColorHouses.NoHouse;

  return (
    <Link href={`/${lang}/character/${character.id}`}>
      <div className="flex flex-col rounded-lg overflow-hidden shadow-md h-full">
        <div className={`${houseColor} p-2 text-center text-white font-bold text-sm`}>
          {character.name}
        </div>
        
        <div className="relative h-[400px] w-full bg-black">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </Link>
  );
}