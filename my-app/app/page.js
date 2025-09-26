import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Fundo com gradientes e textura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_0%_-10%,rgba(124,92,255,.15),transparent),radial-gradient(900px_500px_at_100%_10%,rgba(41,211,152,.12),transparent)]" />
      <div className="absolute inset-0 bg-[url('/textura3.png')] bg-[length:18%] mix-blend-overlay opacity-30" />

      {/* Conteúdo */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-10">
        {/* Card principal */}
        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.3)]">
          {/* Título */}
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-foreground/70 ring-1 ring-white/10">
              🎮 Jogo da Forca · Next.js
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground/95 md:text-5xl">
              Adivinhe a palavra. Evite a forca.
            </h1>
            <p className="mt-3 text-base text-foreground/70">
              Letras, tentativas, vitória/derrota e reinício – tudo num visual limpo e responsivo.
            </p>
          </div>

          {/* Ação */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/play"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:from-indigo-400 hover:to-violet-400 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Jogar agora
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <a
              href="#como-jogar"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-base font-semibold text-foreground/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Como jogar
            </a>
          </div>

          {/* Mini ilustração da forca (SVG simples) */}
          <div className="mt-10 flex justify-center">
            <svg
              viewBox="0 0 320 220"
              className="h-40 w-auto stroke-foreground/60"
              fill="none"
              strokeWidth="8"
            >
              <line x1="30" y1="200" x2="290" y2="200" />
              <line x1="60" y1="200" x2="60" y2="20" />
              <line x1="60" y1="20" x2="200" y2="20" />
              <line x1="200" y1="20" x2="200" y2="60" />
              {/* cabeça "fantasma" para ambientar */}
              <circle cx="200" cy="80" r="18" strokeWidth="6" />
            </svg>
          </div>
        </div>

        {/* Como jogar */}
        <div
          id="como-jogar"
          className="mt-8 grid w-full max-w-2xl gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-foreground/80 backdrop-blur-xl md:grid-cols-2"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Regras</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tente letras do alfabeto para revelar a palavra.</li>
              <li>Erros consomem tentativas (máx. definido no jogo).</li>
              <li>Descubra todas as letras para vencer.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Dicas</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use teclado físico ou o teclado virtual do jogo.</li>
              <li>As letras usadas aparecem como certas/erradas.</li>
              <li>Reinicie quando quiser uma nova palavra.</li>
            </ul>
          </div>
        </div>

        {/* Rodapé pequeno */}
        <p className="mt-6 text-center text-xs text-foreground/60">
          Feito com Next.js · Visual com glassmorphism + gradientes sutis
        </p>
      </section>
    </main>
  );
}