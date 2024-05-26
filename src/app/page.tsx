import Pokemon from "@/components/Pokemon";
import { Button } from "@/components/ui/button";

export default function Home() {
  const names = ["pikachu", "raichu", "palkia", "infernape"];
  return (
    <main className="flex h-screen">
      <div className="m-auto">
        <div className="flex gap-x-4">
          {names.map((name, index) => (
            <Pokemon key={name + index} name={name} />
          ))}
        </div>
      </div>
    </main>
  );
}
