import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import cardStar from "@/assets/card-star.jpg";
import cardMoon from "@/assets/card-moon.jpg";
import cardSun from "@/assets/card-sun.jpg";
import cardBack from "@/assets/card-back.jpg";
import cardLovers from "@/assets/card-lovers.jpg";
import cardWheel from "@/assets/card-wheel.jpg";
import cardPriestess from "@/assets/card-priestess.jpg";
import galleryTable from "@/assets/gallery-table.jpg";
import anaEloisa from "@/assets/ana-eloisa.png";

const WHATSAPP_NUMBER = "5554991299549";
const WHATSAPP_DISPLAY = "+55 54 99129-9549";
const WHATSAPP_URL = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const DECK = [
  {
    name: "A Estrela",
    image: cardStar,
    meaning:
      "Esperança renovada e fé serena. Os céus se abrem para guiar seus próximos passos com luz.",
  },
  {
    name: "A Lua",
    image: cardMoon,
    meaning:
      "Intuição, sonhos e mistério. Confie no que sente, mesmo quando os olhos não veem com clareza.",
  },
  {
    name: "O Sol",
    image: cardSun,
    meaning:
      "Vitalidade, alegria e clareza. Um ciclo de prosperidade e celebração se aproxima.",
  },
  {
    name: "Os Amantes",
    image: cardLovers,
    meaning:
      "Escolhas do coração e uniões profundas. Há harmonia entre desejo e propósito.",
  },
  {
    name: "A Roda da Fortuna",
    image: cardWheel,
    meaning:
      "O destino gira a seu favor. Aceite a mudança — ela traz reviravoltas necessárias.",
  },
  {
    name: "A Sacerdotisa",
    image: cardPriestess,
    meaning:
      "Sabedoria oculta e silêncio sagrado. As respostas vivem dentro do seu próprio mistério.",
  },
] as const;

const POSITION_LABELS = ["Passado", "Presente", "Futuro"] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alma Arcanum — Tarot, leituras e orientação espiritual" },
      {
        name: "description",
        content:
          "Tarot online e consultas personalizadas via WhatsApp. Tire suas cartas, descubra os arcanos e receba orientação espiritual com Alma Arcanum.",
      },
      { property: "og:title", content: "Alma Arcanum — Tarot e Orientação Espiritual" },
      {
        property: "og:description",
        content:
          "Revele as verdades ocultas sob o véu. Tiragens online e leituras personalizadas via WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function shuffleDeck() {
  const arr = [...DECK];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, 3);
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Nav />
      <Hero />
      <SpreadInteractive />
      <RitualSpreads />
      <Gallery />
      <ChanneledLetter />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="font-display text-xl tracking-widest gold-gradient leading-none">
          ALMA ARCANUM
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/50 -mt-0.5">
          Ana Eloisa · Cartomante
        </span>
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] font-light">
        <a href="#tiragem" className="hover:text-primary transition-colors">
          Tiragem
        </a>
        <a href="#consultas" className="hover:text-primary transition-colors">
          Consultas
        </a>
        <a href="#carta-canalizada" className="hover:text-primary transition-colors">
          Carta Canalizada
        </a>
        <a href="#contato" className="hover:text-primary transition-colors">
          Contato
        </a>
      </div>
      <a
        href={WHATSAPP_URL("Olá! Gostaria de uma consulta de tarot.")}
        target="_blank"
        rel="noreferrer"
        className="font-mono text-[10px] border border-primary/40 px-4 py-2 rounded-full hover:bg-primary hover:text-background transition-all"
      >
        {WHATSAPP_DISPLAY}
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 animate-fade-up">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6 block">
            O destino aguarda o seu chamado
          </span>
          <h1 className="font-display text-5xl md:text-7xl mb-8 leading-[1.1] text-balance">
            Revele as <span className="italic font-light">Verdades</span> Ocultas
            sob o Véu.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-[45ch] mb-10 text-pretty leading-relaxed">
            Orientação espiritual profunda através do Tarot milenar. Uma jornada
            de autoconhecimento e clareza para os seus caminhos.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#tiragem"
              className="group relative inline-flex items-center gap-4 bg-primary text-background px-8 py-4 font-display font-bold text-base rounded-sm overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <span className="relative z-10">TIRAR MINHAS CARTAS</span>
            </a>
            <a
              href={WHATSAPP_URL("Olá! Gostaria de uma leitura completa de tarot.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-primary/40 px-8 py-4 font-display text-base rounded-sm hover:bg-primary/10 transition-colors"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[500px]">
          <div className="absolute card-fan-1 animate-float-card" style={{ animationDelay: "0ms" }}>
            <img
              src={cardStar}
              alt="Carta A Estrela"
              width={512}
              height={768}
              className="w-48 md:w-64 rounded-xl ring-1 ring-primary/30 shadow-2xl"
            />
          </div>
          <div className="absolute card-fan-2 animate-float-card z-10" style={{ animationDelay: "500ms" }}>
            <img
              src={cardMoon}
              alt="Carta A Lua"
              width={512}
              height={768}
              className="w-48 md:w-64 rounded-xl ring-1 ring-primary/40 shadow-2xl"
            />
          </div>
          <div className="absolute card-fan-3 animate-float-card" style={{ animationDelay: "1000ms" }}>
            <img
              src={cardSun}
              alt="Carta O Sol"
              width={512}
              height={768}
              className="w-48 md:w-64 rounded-xl ring-1 ring-primary/30 shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #3e2f5b 0%, transparent 70%)",
        }}
      />
    </section>
  );
}

function SpreadInteractive() {
  const [drawn, setDrawn] = useState<typeof DECK[number][] | null>(null);
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false]);
  const [shuffling, setShuffling] = useState(false);

  const handleShuffle = () => {
    setShuffling(true);
    setRevealed([false, false, false]);
    setTimeout(() => {
      setDrawn(shuffleDeck());
      setShuffling(false);
    }, 700);
  };

  const reveal = (i: number) => {
    setRevealed((r) => r.map((v, idx) => (idx === i ? true : v)));
  };

  const allRevealed = useMemo(() => revealed.every(Boolean) && drawn, [revealed, drawn]);

  return (
    <section id="tiragem" className="py-24 border-t border-border bg-[#050507]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/60">
            Sua tiragem agora
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 mb-6 text-balance">
            Embaralhe e revele suas três cartas
          </h2>
          <p className="max-w-[55ch] mx-auto text-foreground/60 text-lg">
            Respire fundo, pense em uma pergunta sincera e deixe que os arcanos
            sussurrem a resposta. Para uma leitura aprofundada, fale comigo no
            WhatsApp.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <button
            onClick={handleShuffle}
            disabled={shuffling}
            className="group relative inline-flex items-center gap-4 bg-primary text-background px-8 py-4 font-display font-bold text-base rounded-sm overflow-hidden transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            <span className="relative z-10">
              {shuffling
                ? "EMBARALHANDO..."
                : drawn
                ? "EMBARALHAR NOVAMENTE"
                : "EMBARALHAR AS CARTAS"}
            </span>
          </button>
        </div>

        {drawn && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {drawn.map((card, i) => (
              <div key={i} className="flex flex-col items-center animate-fade-up" style={{ animationDelay: `${i * 120}ms` }}>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
                  {POSITION_LABELS[i]}
                </span>
                <button
                  onClick={() => reveal(i)}
                  className="relative w-48 aspect-[2/3] rounded-xl ring-1 ring-primary/30 overflow-hidden shadow-2xl transition-transform hover:scale-[1.03] cursor-pointer"
                  aria-label={`Revelar carta ${POSITION_LABELS[i]}`}
                >
                  <img
                    src={revealed[i] ? card.image : cardBack}
                    alt={revealed[i] ? card.name : "Verso da carta"}
                    width={512}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
                {revealed[i] && (
                  <div className="mt-6 text-center max-w-xs animate-fade-up">
                    <h3 className="font-display text-xl text-primary italic mb-2">
                      {card.name}
                    </h3>
                    <p className="text-foreground/70 text-base leading-relaxed">
                      {card.meaning}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {allRevealed && (
          <div className="mt-16 text-center animate-fade-up">
            <p className="text-foreground/70 italic text-lg mb-6 max-w-[50ch] mx-auto">
              Quer entender o que essas cartas dizem sobre a sua história?
              Receba uma leitura completa e personalizada.
            </p>
            <a
              href={WHATSAPP_URL("Olá! Acabei de tirar minhas cartas no site e gostaria de uma leitura completa.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-background px-8 py-4 font-display text-base rounded-sm hover:scale-[1.02] transition-transform"
            >
              CONVERSAR NO WHATSAPP
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function RitualSpreads() {
  const cards = [
    {
      n: "01",
      title: "O Oráculo Diário",
      text: "Uma única carta para meditação e orientação imediata sobre sua energia atual.",
      msg: "Olá! Quero o Oráculo Diário (1 carta).",
    },
    {
      n: "02",
      title: "A Jornada das Três",
      text: "Passado, presente e o futuro provável. A leitura clássica para clareza total.",
      msg: "Olá! Quero agendar a Jornada das Três (passado, presente e futuro).",
      featured: true,
    },
    {
      n: "03",
      title: "Vínculos da Alma",
      text: "Leitura especializada em relacionamentos, conexões kármicas e caminhos do coração.",
      msg: "Olá! Quero uma leitura Vínculos da Alma sobre relacionamentos.",
    },
  ];

  return (
    <section id="consultas" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl mb-4">Escolha seu Portal</h2>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/60">
            Três caminhos para a iluminação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.n}
              className={`group p-8 border rounded-sm text-center transition-all ${
                c.featured
                  ? "border-primary/30 bg-primary/5 md:-translate-y-4"
                  : "border-border bg-accent/5 hover:bg-accent/10"
              }`}
            >
              <div
                className={`mb-6 font-display text-4xl transition-opacity ${
                  c.featured ? "text-primary" : "opacity-20 group-hover:opacity-100"
                }`}
              >
                {c.n}
              </div>
              <h3 className="text-2xl font-display mb-4 italic">{c.title}</h3>
              <p className="text-foreground/60 mb-8">{c.text}</p>
              <a
                href={WHATSAPP_URL(c.msg)}
                target="_blank"
                rel="noreferrer"
                className={
                  c.featured
                    ? "text-sm font-bold uppercase tracking-widest bg-primary text-background px-6 py-3 rounded-full inline-block"
                    : "text-sm uppercase tracking-widest border-b border-primary/40 pb-1 hover:border-primary"
                }
              >
                {c.featured ? "Agendar Tiragem" : "Consultar Agora"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 md:col-span-2 flex flex-col justify-center pr-0 md:pr-12">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Conecte-se com a Sabedoria Ancestral
          </h2>
          <p className="leading-relaxed text-foreground/70 mb-2 text-pretty text-lg">
            Minhas consultas não são apenas previsões, mas ferramentas de
            empoderamento. Através do simbolismo dos Arcanos, deciframos os
            códigos do seu inconsciente e iluminamos os caminhos do destino.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/70 mb-8">
            Ana Eloisa · Cartomante
          </p>
          <div className="flex items-center gap-4 text-primary">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="font-mono text-xs tracking-tighter italic">
              Sincronicidade & Destino
            </span>
          </div>
        </div>
        <img
          src={galleryTable}
          alt="Mesa de tarot iluminada por velas"
          width={768}
          height={1024}
          loading="lazy"
          className="aspect-[3/4] object-cover rounded-sm ring-1 ring-white/5 w-full"
        />
        <img
          src={anaEloisa}
          alt="Ana Eloisa, cartomante"
          width={768}
          height={1024}
          loading="lazy"
          className="aspect-[3/4] object-cover rounded-sm ring-1 ring-white/5 w-full"
        />
      </div>
    </section>
  );
}

function ChanneledLetter() {
  const points = [
    "O que aquela pessoa queria te dizer, mas não conseguiu (ou não soube) expressar;",
    "O que quem já partiu quer que você saiba, para que seu coração finalmente fique em paz;",
    "As verdades que você não sabe, mas que a espiritualidade quer te revelar para seguir em frente.",
  ];

  return (
    <section id="carta-canalizada" className="py-24 border-t border-border bg-[#050507] relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #3e2f5b 0%, transparent 60%)",
        }}
      />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/60 block mb-4">
            Revelação, cura e fechamento de ciclos
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-6 text-balance leading-tight">
            O que o <span className="italic text-primary">silêncio</span> deles quer te dizer?
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty text-center max-w-[55ch] mx-auto">
            Sabe aquilo que você sente que ficou mal resolvido? Aquela palavra que faltou, o sentimento que a pessoa não conseguiu te falar em vida, ou o que o coração de alguém quer te dizer agora, mas o orgulho e a distância não deixam?
          </p>

          <p className="text-lg text-foreground/70 leading-relaxed text-pretty text-center max-w-[50ch] mx-auto italic">
            A <strong className="text-primary font-normal not-italic">Carta Canalizada</strong> serve justamente para traduzir o que o silêncio esconde.
          </p>
        </div>

        <div className="bg-accent/5 border border-border rounded-sm p-8 md:p-10 mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/70 mb-6 text-center">
            Eu me coloco como um canal para acessar o campo energético e espiritual e trazer em palavras:
          </p>
          <ul className="space-y-5">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-4 text-foreground/80">
                <span className="font-display text-primary text-xl mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center space-y-6">
          <p className="text-foreground/60 italic max-w-[45ch] mx-auto">
            Não é sobre adivinhação. É sobre revelação, cura e fechamento de ciclos. É dar voz ao que a alma do outro quer te falar, mas que a boca não consegue.
          </p>

          <a
            href={WHATSAPP_URL("Olá! Quero agendar uma Carta Canalizada.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-background px-8 py-4 font-display text-base rounded-sm hover:scale-[1.02] transition-transform"
          >
            AGENDAR CARTA CANALIZADA
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="py-32 bg-background border-t border-border overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="w-12 h-12 border border-primary rounded-full mx-auto mb-12 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl mb-12 leading-tight text-balance">
          Sua resposta está a uma <br />
          <span className="italic text-primary">mensagem</span> de distância.
        </h2>
        <p className="text-foreground/60 mb-2 text-lg max-w-[45ch] mx-auto">
          Qualquer dúvida ou tiragem, chame a Ana Eloisa diretamente no WhatsApp.
          Atendimento pessoal, sigiloso e acolhedor.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/70 mb-10">
          Ana Eloisa · Cartomante
        </p>
        <a
          href={WHATSAPP_URL("Olá! Tenho uma dúvida sobre as tiragens de tarot.")}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-col items-center gap-4 group"
        >
          <span className="font-mono text-xl md:text-2xl tracking-[0.3em] group-hover:text-primary transition-colors">
            {WHATSAPP_DISPLAY}
          </span>
          <div className="h-[1px] w-full bg-border relative overflow-hidden">
            <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </div>
          <span className="text-xs uppercase tracking-[0.5em] opacity-60">
            Conversar no WhatsApp
          </span>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full text-[15vw] font-display leading-none text-white/[0.02] whitespace-nowrap pointer-events-none select-none -mb-8">
        ARCANUM · DESTINO · ALMA
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
        © {new Date().getFullYear()} Alma Arcanum · Todos os mistérios reservados
      </p>
    </footer>
  );
}
