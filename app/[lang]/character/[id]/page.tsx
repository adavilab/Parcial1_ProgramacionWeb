import Image from "next/image";
import { getDictionary } from "../../dictionaries";

const BorderColor: any = {
  Gryffindor: 'border-[#740001]',
  Slytherin: 'border-[#1A472A]',
  Ravenclaw: 'border-[#0E1A40]',
  Hufflepuff: 'border-[#FFD800]',
};

export default async function Detail({ params }: { params: any }) {
  const { id, lang } = await params;
  const dict = await getDictionary(lang);
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
  const [personaje] = await res.json();

  return (
    <div className="flex flex-col items-center bg-[#e0e0e0] min-h-screen pt-10 px-4">
      <h1 className="text-[#FDB608] font-bold text-3xl text-center mb-6">
        {personaje.name}
      </h1>

      <div className={`flex flex-row border-3 rounded-xl overflow-hidden ${BorderColor[personaje.house]}`}>
        
        <div className="p-4 flex flex-col justify-center space-y-2 min-w-xs">
          <p><strong>{dict.char.house}:</strong> {personaje.house}</p>
          <p><strong>{dict.char.gender}:</strong> {personaje.gender}</p>
          <p><strong>{dict.char.wand}:</strong> {personaje.wand.core}</p>
          <p><strong>{dict.char.wood}:</strong> {personaje.wand.wood}</p>
          <p><strong>{dict.char.length}:</strong> {personaje.wand.length}</p>
        </div>

        <div className="relative w-xs h-[500px]">
          <Image
            src={personaje.image}
            alt={personaje.name}
            fill
          />
        </div>
      </div>
    </div>
  );
}