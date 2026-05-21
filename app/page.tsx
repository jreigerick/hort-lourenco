"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
 return (
  <main className="bg-black text-white min-h-screen overflow-hidden">
      {/* NAVBAR */}
     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

  <div className="flex items-center justify-between px-10 py-6">

    <h1 className="text-2xl tracking-[0.4em] font-bold">
      HORT
    </h1>

  <div className="hidden md:flex gap-8 text-sm text-zinc-300">
<a
href="#produtos"
className="hover:text-green-400 transition"
>
Produtos
</a>
<a
href="#promocoes"
className="hover:text-green-400 transition"
>
Promoções
</a>

<a
href="#contato"
className="hover:text-green-400 transition"
>
Contato
</a>
</div>

<a
  href="https://wa.me/5511913689013?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!"
  target="_blank"
  className="md:hidden bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold"
>
  Pedido
</a>

</div>

</nav>

      {/* HERO */}
      <motion.section
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="flex flex-col items-center justify-center text-center px-6 pt-32"
>

        <h1 className="text-7xl md:text-8xl font-bold tracking-[0.3em]">
          HORT LOURENÇO
        </h1>

        <p className="text-zinc-400 mt-8 max-w-xl text-lg">
          Frutas frescas, verduras selecionadas e qualidade premium para sua família.
        </p>

   <a
  href="https://wa.me/5511913689013?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!"
  target="_blank"
  className="mt-10 px-10 py-5 bg-green-500 rounded-full text-black font-bold hover:scale-110 hover:bg-green-400 transition-all duration-500 shadow-[0_0_40px_rgba(34,197,94,0.5)]"
>
  Fazer Pedido
</a>
      </motion.section>

            {/* CARDS */}
     <motion.section
  id="produtos"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative grid md:grid-cols-3 gap-8 px-10 py-32"
>
        <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(34,197,94,0.7)] animate-pulse transition-all duration-500">
          <Image src="/images/frutas.jpg" alt="Frutas" width={500} height={300} className="w-full h-52 object-cover hover:scale-110 transition-all duration-700" />
          <div className="p-8">
            <h2 className="text-3xl mb-4">🍎 Frutas</h2>
            <p className="text-zinc-400">Produtos frescos selecionados diariamente.</p>
            <a href="#produtos">
  <button className="mt-6 bg-green-500 hover:bg-green-400 hover:scale-105 text-black px-5 py-3 rounded-full font-semibold transition-all duration-300">
  Ver produtos
</button>
</a>
          </div>
        </div>

       <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(34,197,94,0.7)] animate-pulse transition-all duration-500">
          <Image src="/images/legumes.jpg" alt="Legumes" width={500} height={300} className="w-full h-52 object-cover hover:scale-110 transition-all duration-700" />
          <div className="p-8">
            <h2 className="text-3xl mb-4">🥬 Legumes</h2>
            <p className="text-zinc-400">Legumes frescos e de alta qualidade.</p>
            <a href="#produtos">
  <button className="mt-6 bg-green-500 hover:bg-green-400 hover:scale-105 text-black px-5 py-3 rounded-full font-semibold transition-all duration-300">
  Ver produtos
</button>
</a>
          </div>
        </div>

        <div className="relative z-10  bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:-translate-y-4 hover:shadow-[0_0_60px_rgba(34,197,94,0.7)] animate-pulse transition-all duration-500">
          <Image src="/images/delivery.jpg" alt="Delivery" width={500} height={300} className="w-full h-52 object-cover hover:scale-110 transition-all duration-700" />
          <div className="p-8">
            <h2 className="text-3xl mb-4">🚚 Delivery</h2>
            <p className="text-zinc-400">Entregamos rapidamente na sua região.</p>
            <a href="#produtos">
  <button className="mt-6 bg-green-500 hover:bg-green-400 hover:scale-105 text-black px-5 py-3 rounded-full font-semibold transition-all duration-300">
  Ver produtos
</button>
</a>
          </div>
                </div>

      </motion.section>

{/* PROMOÇÕES */}
<motion.section
  id="promocoes"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="px-10 pb-32"
>
 <div className="relative overflow-hidden rounded-[40px] border border-green-500/20 bg-gradient-to-r from-green-500/10 to-black p-10 max-w-7xl mx-auto">

    <div className="absolute inset-0 bg-green-500/5 blur-3xl"></div>

    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

      <div>
        <p className="text-green-400 tracking-[0.3em] uppercase text-sm mb-4">
          Promoção da Semana
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
  Maçã Fuji
</h2>

        <p className="text-zinc-400 max-w-xl text-lg">
          Maçã Fuji fresquinha, selecionada e em promoção especial no HORT Lourenço.
        </p>

        <div className="flex items-end gap-3 mt-8">
  <span className="text-6xl font-bold text-green-400">
    R$16,99
  </span>

  <span className="text-zinc-400 text-2xl mb-2">
    /kg
  </span>
</div>

        <a
          href="https://wa.me/5511913689013"
          target="_blank"
          className="inline-block mt-8 bg-green-500 hover:bg-green-400 transition-all duration-300 hover:scale-105 text-black px-8 py-4 rounded-full font-bold"
        >
          Pedir Maçã Fuji
        </a>
      </div>

      <img
  src="/images/maca-fuji.png"
  alt="Maçã Fuji"
  className="w-full h-[320px] object-cover rounded-[30px] shadow-[0_0_60px_rgba(34,197,94,0.3)] hover:scale-105 transition-all duration-700"
/>
    </div>
  </div>
</motion.section>
     
      <a
  href="https://wa.me/5511913689013?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!" 
  target="_blank"
  className="fixed bottom-6 right-6 z-50 bg-green-500 text-black px-6 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-110 hover:bg-green-400 transition-all duration-300"
>
  WhatsApp
</a>
<footer className="border-t border-white/10 mt-32 py-10 text-center text-zinc-500">

  <h2 className="text-2xl tracking-[0.3em] text-white mb-4">
    HORT LOURENÇO
  </h2>

  <p>
    Frutas frescas • verduras • delivery rápido
  </p>

  <p className="mt-4 text-sm">
    © 2026 HORT Lourenço. Todos os direitos reservados.
  </p>

</footer>
    </main>
  );
}