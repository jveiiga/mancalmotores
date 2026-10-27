"use client"

import type { ReactNode } from "react";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Cog,
  Headset,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import Image from "next/image";

const WHATSAPP = "5511999999999"; // Substitua pelo número da Mancal Motores

const whatsappLink = (message = "Olá! Gostaria de um orçamento de bloco de motor.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const image = {
  hero: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=85",
  engine: "https://unsplash.com/pt-br/fotografias/compartimento-do-motor-cinza-xFjti9rYILo",
  workshop: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1000&q=85",
  mechanic: "https://images.unsplash.com/photo-1632823471565-1ecdf5c3a0a8?auto=format&fit=crop&w=1000&q=85",
};

const products = [
  {
    name: "Bloco de motor",
    description: "Consulte a disponibilidade para seu veículo.",
    tag: "CONSULTA DE APLICAÇÃO",
    image: "/engine-1.jpg",
  },
  {
    name: "Bloco parcial",
    description: "Consulte versões e configurações disponíveis.",
    tag: "SOB CONSULTA",
    image: "/engine-2.png",
  },
  {
    name: "Peças para motor",
    description: "Informe o modelo e a motorização desejada.",
    tag: "ATENDIMENTO ESPECIALIZADO",
    image: "/engines.webp",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Procedência",
    text: "Informações claras sobre a origem e as condições da peça.",
  },
  {
    icon: Search,
    title: "Compatibilidade",
    text: "Consulta por veículo, ano, motorização ou código do motor.",
  },
  {
    icon: Headset,
    title: "Atendimento especializado",
    text: "Suporte para encontrar a peça adequada à sua necessidade.",
  },
  {
    icon: Truck,
    title: "Opções de entrega",
    text: "Consulte disponibilidade, frete e prazo para sua região.",
  },
];

const faqs = [
  {
    question: "Como saber qual bloco de motor serve no meu veículo?",
    answer:
      "Informe a marca, o modelo, o ano e a motorização. Se possível, envie também o código do motor para facilitar a verificação da aplicação.",
  },
  {
    question: "Como consultar preço e disponibilidade?",
    answer:
      "Entre em contato pelo WhatsApp com os dados do veículo. A equipe poderá verificar as opções disponíveis e informar as condições comerciais.",
  },
  {
    question: "Os blocos de motor possuem garantia?",
    answer:
      "As condições de garantia dependem do produto e da modalidade de venda. Solicite os termos aplicáveis antes de concluir a compra.",
  },
  {
    question: "Vocês enviam para outras cidades?",
    answer:
      "Consulte o atendimento para confirmar as regiões atendidas, as opções de transporte e o prazo estimado de entrega.",
  },
  {
    question: "Posso comprar sem saber o código do motor?",
    answer:
      "Sim. Comece informando marca, modelo, ano e motorização. A equipe orientará sobre os dados adicionais necessários para confirmar a aplicação.",
  },
];

function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-yellow-300" : "text-yellow-700"
        }`}
    >
      <span className="h-2 w-2 rounded-full bg-yellow-500" />
      {children}
    </div>
  );
}

function Button({
  children,
  href,
  secondary = false,
  className = "",
}: {
  children: ReactNode;
  href: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition duration-300 ${secondary
        ? "border border-white/25 text-white hover:bg-white/10"
        : "bg-red-500 text-white hover:bg-red-600"
        } ${className}`}
    >
      {children}
    </a>
  );
}

export default function MancalMotores() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [vehicle, setVehicle] = useState({
    marca: "",
    modelo: "",
    ano: "",
    motor: "",
  });

  const handleQuote = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const details = [
      `Marca: ${vehicle.marca}`,
      `Modelo: ${vehicle.modelo}`,
      `Ano: ${vehicle.ano || "Não informado"}`,
      `Motorização: ${vehicle.motor || "Não informado"}`,
    ].join("\n");

    window.open(
      whatsappLink(`Olá! Quero consultar um bloco de motor.\n\n${details}`),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navItems = [
    ["Produtos", "#produtos"],
    ["Diferenciais", "#diferenciais"],
    ["Como comprar", "#como-comprar"],
    ["Dúvidas", "#faq"], ``
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f5] font-sans text-[#181818]">
      {/* Navegação */}
      <header className="relative z-50 border-b border-black/5 bg-[#f7f7f5]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo da Mancal Motores"
              width={200}
              height={44}
              className="object-cover"
            />
            {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#181818] text-red-400">
              <Cog size={26} strokeWidth={2.2} />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight">
                MANCAL<span className="text-red-600">.</span>
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                Motores e componentes
              </div>
            </div> */}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-neutral-600 transition hover:text-red-600"
              >
                {label}
              </a>
            ))}
          </nav>

          <Button
            href={whatsappLink()}
            className="hidden min-[370px]:hidden md:inline-flex"
          >
            <MessageCircle size={17} />
            Solicitar orçamento
            <ArrowUpRight size={16} />
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute left-0 top-full w-full border-t border-black/5 bg-[#f7f7f5] p-5 shadow-xl md:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-black/5 py-4 text-sm font-semibold"
              >
                {label}
              </a>
            ))}
            <Button
              href={whatsappLink()}
              className="mt-5 w-full"
            >
              <MessageCircle size={17} />
              Solicitar orçamento
            </Button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative bg-[#171715] text-white">
        <div className="absolute inset-0">
          <img
            src={image.hero}
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171715] via-[#171715]/90 to-[#171715]/30" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div>
            <SectionLabel light>Especialistas em motores</SectionLabel>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              O bloco de motor certo para{" "}
              <span className="text-red-500">seguir em frente.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">
              Encontre a peça compatível com seu veículo. Consulte
              disponibilidade, condições comerciais e opções de entrega
              diretamente com nossa equipe.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#consulta">
                Encontrar meu bloco
                <ArrowRight size={18} />
              </Button>
              <Button href="#produtos" secondary>
                Explorar produtos
                <ArrowDownRight size={17} />
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-neutral-300">
              <span className="flex items-center gap-2">
                <CircleCheck size={16} className="text-yellow-400" />
                Consulta de aplicação
              </span>
              <span className="flex items-center gap-2">
                <CircleCheck size={16} className="text-yellow-400" />
                Atendimento pelo WhatsApp
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-red-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
              <Image
                src="/engine.png"
                alt="Imagem ilustrativa de componentes automotivos"
                className="h-[300px] w-full rounded-2xl object-cover sm:h-[390px]"
                width={600}
                height={490}
              />
              <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-[#181818]/90 p-5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-neutral-400">
                      Atendimento personalizado
                    </p>
                    <p className="mt-1 font-bold">
                      Vamos encontrar sua peça?
                    </p>
                  </div>
                  <a
                    href={whatsappLink()}
                    aria-label="Consultar pelo WhatsApp"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 transition hover:bg-red-600"
                  >
                    <ArrowUpRight size={23} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
            {[
              ["01", "Identifique", "Informe os dados do veículo."],
              ["02", "Consulte", "Verifique a aplicação e disponibilidade."],
              ["03", "Compre", "Confira as condições antes de fechar."],
            ].map(([number, title, description]) => (
              <div key={number} className="flex gap-4 py-6 sm:px-5 lg:px-8">
                <span className="text-sm font-bold text-red-400">{number}</span>
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="mt-1 text-sm leading-5 text-neutral-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulta de compatibilidade */}
      <section id="consulta" className="px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>Comece por aqui</SectionLabel>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Qual bloco de motor seu veículo precisa?
            </h2>
            <p className="mt-5 leading-7 text-neutral-600">
              Preencha os dados disponíveis. Sua consulta será enviada à equipe
              da Mancal Motores pelo WhatsApp.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
              <Search className="mt-1 shrink-0 text-red-600" size={21} />
              <p className="text-sm leading-6 text-neutral-700">
                <strong>Dica:</strong> o código do motor ajuda a confirmar a
                compatibilidade. Se não souber, informe os demais dados.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleQuote}
            className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.25)] sm:p-9"
          >
            <h3 className="text-xl font-bold">Consulte sua peça</h3>
            <p className="mt-2 text-sm text-neutral-500">
              Os campos com * são obrigatórios.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold">
                Marca do veículo *
                <input
                  required
                  value={vehicle.marca}
                  onChange={(e) =>
                    setVehicle({ ...vehicle, marca: e.target.value })
                  }
                  placeholder="Ex.: Volkswagen"
                  className="mt-2 h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 font-normal outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>

              <label className="text-sm font-semibold">
                Modelo *
                <input
                  required
                  value={vehicle.modelo}
                  onChange={(e) =>
                    setVehicle({ ...vehicle, modelo: e.target.value })
                  }
                  placeholder="Ex.: Gol"
                  className="mt-2 h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 font-normal outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>

              <label className="text-sm font-semibold">
                Ano do veículo
                <input
                  value={vehicle.ano}
                  onChange={(e) =>
                    setVehicle({ ...vehicle, ano: e.target.value })
                  }
                  placeholder="Ex.: 2018"
                  inputMode="numeric"
                  className="mt-2 h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 font-normal outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>

              <label className="text-sm font-semibold">
                Motorização / código
                <input
                  value={vehicle.motor}
                  onChange={(e) =>
                    setVehicle({ ...vehicle, motor: e.target.value })
                  }
                  placeholder="Ex.: 1.6 MSI"
                  className="mt-2 h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 font-normal outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-red-500 px-6 font-bold text-white transition hover:bg-red-600"
            >
              <MessageCircle size={19} />
              Consultar pelo WhatsApp
              <ArrowRight size={18} />
            </button>
            <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
              A consulta não confirma estoque ou preço automaticamente.
              Esses dados serão verificados no atendimento.
            </p>
          </form>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="bg-white px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Nosso catálogo</SectionLabel>
              <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
                A peça que seu projeto precisa.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                Consulte aplicações, versões e disponibilidade com nossa equipe.
              </p>
            </div>
            <a
              href={whatsappLink("Olá! Gostaria de consultar o catálogo da Mancal Motores.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-800"
            >
              Consultar catálogo completo <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-3xl border border-black/5 bg-[#f7f7f5] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-[10px] font-bold tracking-wider text-neutral-700">
                    {product.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-white">
                    <span className="text-sm font-bold">0{index + 1}</span>
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-neutral-600">
                    {product.description}
                  </p>
                  <a
                    href={whatsappLink(`Olá! Gostaria de consultar ${product.name.toLowerCase()} e verificar a disponibilidade.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-between border-t border-black/10 pt-5 text-sm font-bold"
                  >
                    Consultar disponibilidade
                    <ArrowUpRight size={19} className="text-red-600" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-neutral-500">
            Imagens ilustrativas. Produtos, aplicações e disponibilidade devem ser confirmados.
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionLabel>Por que Mancal Motores?</SectionLabel>
              <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
                Mais clareza para comprar a peça certa.
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-neutral-600">
              A compra de um componente de motor exige atenção à aplicação,
              às condições da peça e à garantia. Nosso atendimento deve ajudar
              você a esclarecer esses pontos antes de fechar o pedido.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-black/5 bg-black/5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white p-7 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faixa de conversão */}
      <section id="como-comprar" className="px-5 pb-20 sm:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#191918] text-white">
          <div className="absolute inset-0">
            <img
              src={image.workshop}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#191918] via-[#191918]/95 to-transparent" />
          </div>
          <div className="relative max-w-3xl px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <SectionLabel light>Seu próximo passo</SectionLabel>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Não compre no escuro. Confirme a aplicação.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-neutral-300">
              Envie os dados do seu veículo e consulte as opções disponíveis
              antes de tomar sua decisão.
            </p>
            <Button href="#consulta" className="mt-8">
              Consultar meu veículo <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-black/5 bg-white px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Dúvidas frequentes</SectionLabel>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Antes de comprar, esclareça suas dúvidas.
            </h2>
            <p className="mt-5 leading-7 text-neutral-600">
              Não encontrou sua resposta? Fale diretamente com nossa equipe.
            </p>
            <Button href={whatsappLink("Olá! Tenho uma dúvida sobre a compra de bloco de motor.")} className="mt-7">
              <MessageCircle size={18} />
              Falar com a equipe
            </Button>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="text-sm font-bold leading-6 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-red-600 transition-transform ${openFaq === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="max-w-2xl pb-6 pr-6 text-sm leading-7 text-neutral-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-[#171715] px-5 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <a href="#inicio" className="inline-flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Logo da Mancal Motores"
                  width={300}
                  height={40}
                  className="object-cover"
                />
                {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500 text-white">
                  <Cog size={25} />
                </div>
                <span className="text-xl font-black">
                  MANCAL<span className="text-red-400">.</span>
                </span> */}
              </a>
              <p className="mt-5 max-w-xs text-sm leading-6 text-neutral-400">
                Soluções em componentes automotivos. Consulte nossa equipe
                para encontrar a peça adequada ao seu veículo.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Navegação</h3>
              <div className="mt-4 flex flex-col items-start gap-3 text-sm text-neutral-400">
                {navItems.map(([label, href]) => (
                  <a key={href} href={href} className="hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold">Atendimento</h3>

              <p className="mt-4 text-sm leading-6 text-neutral-400">
                Consulte disponibilidade, preços, garantia e entrega pelo WhatsApp.
              </p>

              <div className="my-8 flex items-start gap-2 text-sm text-neutral-400">
                <MapPin size={18} className="mt-1 shrink-0 text-yellow-400" />
                <span>Av. Paulista, 1000 — Bela Vista, São Paulo - SP</span>
              </div>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-yellow-400 hover:text-red-300"
              >
                <MessageCircle size={18} />
                Solicitar orçamento
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Mancal Motores. Todos os direitos reservados.
            </p>
            <a href="/privacy-policy" className="hover:text-white">
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp fixo no mobile */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
        className="fixed bottom-4 right-4 z-40 flex h-14 items-center gap-2 rounded-full bg-red-500 px-5 text-sm font-bold text-white shadow-xl transition hover:bg-red-600 sm:bottom-6 sm:right-6"
      >
        <MessageCircle size={21} />
        <span className="hidden sm:inline">Solicitar orçamento</span>
        <span className="sm:hidden">Orçamento</span>
      </a>
    </main>
  );
}
