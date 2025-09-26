import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center gap-4 h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Jogo da Forca</h1>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Link href="/play" className="text-lg font-semibold transition hover:scale-125">Jogar</Link>
      </div>
    </div>
  );
}