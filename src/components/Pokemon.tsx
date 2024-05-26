import Image from "next/image";

type PokemonInput = {
  name: string;
};

export default async function Pokemon({ name }: PokemonInput) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const data = await res.json();

  return (
    <div className="rounded-2xl grid align-middle border-black hover:drop-shadow-2xl border-2 place-items-center">
      <Image
        src={data.sprites.front_default}
        width={100}
        height={100}
        alt={`An Image of ${data.name}`}
      />
      <span>{data.name}</span>
    </div>
  );
}
