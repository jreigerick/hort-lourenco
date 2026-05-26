"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";
export default function Home() {
  const [cart, setCart] = useState<string[]>([]);
const [quantities, setQuantities] = useState<{ [key: string]: string }>({});
const phoneNumber = "5511913689013";
const productsPrice: { [key: string]: number } = {
  "Maçã Fuji": 16.99,
  "Banana Nanica": 8.99,
  "Alface Americana": 4.99,
  "Tomate": 12.99,
};
const addToCart = (produto: string) => {
  const quantidade = quantities[produto];

  if (!quantidade) {
    alert("Digite a quantidade antes de adicionar.");
    return;
  }

  setCart([...cart, `${produto} - ${quantidade}`]);
  setQuantities({
  ...quantities,
  [produto]: "",
});
};

const cartMessage = encodeURIComponent(
  `Olá, gostaria de fazer um pedido:\n\n${cart
    .map((item, index) => `${index + 1}. ${item}`)
    .join("\n")}`
);

const total = cart.reduce((acc, item) => {
  const nome = item.split(" - ")[0];
  return acc + (productsPrice[nome] || 0);
}, 0);

return (
  <main className="bg-black text-white min-h-screen overflow-hidden">
      {/* NAVBAR */}
     <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">

  <div className="flex items-center justify-between px-4 md:px-10 py-4 md:py-6">

  

  <div className="flex items-center gap-3">
    <img
      src="/images/logo.png"
      alt="HORT Lourenço"
      className="w-10 h-10 object-contain rounded-full"
    />

    <h1 className="text-2xl tracking-[0.6em] font-bold">
      HORT
    </h1>
  </div>

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
 href={`https://wa.me/${phoneNumber}?text=${cartMessage}`}
  target="_blank"
  className="md:hidden bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold"
>
  Pedido
</a>

</div>

</div>

      {/* HERO */}
      <motion.section
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="flex flex-col items-center justify-center text-center px-6 pt-32"
>
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <Image
    src="/images/bannerhort.png"
    alt="Hort Lourenço"
    width={1600}
    height={900}
    className="w-[95%] md:w-[80%] max-h-[700px] h-auto mx-auto rounded-2xl md:rounded-3xl shadow-2xl mt-24 md:mt-8 object-cover"
  />
</motion.div>
<div className="h-10"></div>
        <p className="text-zinc-400 mt-8 max-w-xl text-lg">
          Frutas frescas, verduras selecionadas e qualidade premium para sua família.
        </p>
<a
 href={`https://wa.me/${phoneNumber}?text=${cartMessage}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 px-10 py-5 bg-green-500 rounded-full text-black font-bold hover:scale-110 transition"
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
  className="relative grid md:grid-cols-1 md:grid-cols-3 gap-8 px-10 py-16"
>
       <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
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

       <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
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

       <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
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
 <div className="flex items-center gap-2">
  <FaWhatsapp size={22} />
  WhatsApp
</div>
</a>
{/* SOBRE */}
<motion.section
  id="sobre"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="px-10 pb-32"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div>
      <p className="text-green-400 tracking-[0.3em] uppercase text-sm mb-4">
        Sobre Nós
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-8">
        HORT<br />LOURENÇO
      </h2>

      <p className="text-zinc-400 text-lg leading-relaxed">
        Trabalhamos diariamente com frutas, verduras e legumes frescos,
        sempre buscando qualidade premium, atendimento rápido e produtos
        selecionados especialmente para sua família.
      </p>

      <div className="flex gap-6 mt-10">
        <div>
          <h3 className="text-4xl font-bold text-green-400">+500</h3>
          <p className="text-zinc-500">Clientes</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-green-400">100%</h3>
          <p className="text-zinc-500">Qualidade</p>
        </div>
      </div>
    </div>

    <div className="relative">
      <img
        src="/images/maca-fuji.png"
        alt="HORT Lourenço"
        className="rounded-[40px] shadow-[0_0_80px_rgba(34,197,94,0.25)]"
      />
    </div>

  </div>
</motion.section>
{/* CATÁLOGO */}
<motion.section
  id="catalogo"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="px-10 pb-32"
>
  <p className="text-green-400 tracking-[0.3em] uppercase text-sm text-center mb-4">
    Catálogo
  </p>

  <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
    Produtos em destaque
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {[
      ["🍎", "Maçã Fuji", "R$16,99", "/kg"],
      ["🍌", "Banana Nanica", "R$8,99", "/kg"],
      ["🥬", "Alface Americana", "R$4,99", "/un"],
      ["🍅", "Tomate", "R$12,99", "/kg"],
    ].map(([emoji, nome, preco, unidade]) => (
      <div
        key={nome}
        className="bg-zinc-900/80 border border-white/10 rounded-3xl p-6 hover:-translate-y-3 hover:border-green-500 hover:shadow-[0_0_50px_rgba(34,197,94,0.25)] transition-all duration-500"
      >
        <div className="text-5xl mb-6">{emoji}</div>

        <h3 className="text-2xl font-bold mb-3">{nome}</h3>

        <div className="flex items-end gap-2 mb-6">
          <span className="text-3xl font-bold text-green-400">{preco}</span>
          <span className="text-zinc-500">{unidade}</span>
        </div>

       <button
 onClick={() => addToCart(nome)}
  className="inline-block bg-green-400 hover:bg-green-300 text-black px-5 py-3 rounded-2xl"
>
  Adicionar
</button>

<input
  type="text"
  placeholder={unidade === "/kg" ? "Ex: 300g ou 1kg" : "Ex: 1 un"}
  value={quantities[nome] || ""}
  onChange={(e) =>
    setQuantities({ ...quantities, [nome]: e.target.value })
  }
  className="w-full mt-4 bg-black/80 border border-white/10 rounded-2xl px-4 py-3"
/>


      </div>
    ))}
  </div>
</motion.section>
{cart.length > 0 && (
  <div className="fixed bottom-24 right-6 z-50 bg-zinc-900 border border-green-500/30 rounded-3xl p-5 w-80 shadow-[0_0_50px_rgba(34,197,94,0.25)]">
    <div className="flex items-center gap-3 mb-4">
      <FaShoppingCart className="text-green-400" />
      <h3 className="font-bold text-xl">
  Carrinho ({cart.length})
  <p className="text-green-400 font-bold text-lg">
  Total: R${total.toFixed(2)}
</p>
</h3>
    </div>

    <div className="space-y-2 max-h-40 overflow-y-auto text-sm text-zinc-300">
      {cart.map((item, index) => (
        <p key={index}>{index + 1}. {item}</p>
      ))}
    </div>

    <a
      href={`https://wa.me/5511913689013?text=${cartMessage}`}
      target="_blank"
      className="block mt-5 text-center bg-green-500 hover:bg-green-400 text-black px-5 py-3 rounded-full font-bold transition-all duration-300"
    >
      Enviar no WhatsApp
    </a>
    <button
  onClick={() => setCart([])}
  className="w-full mt-3 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-5 py-3 rounded-full font-bold transition-all duration-300"
>
  Limpar Carrinho
</button>
  </div>
)}
<footer className="border-t border-white/10 mt-16 py-10 text-center text-zinc-500">

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
<footer className="border-t border-white/10 mt-32 bg-black/80">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

    <div>
      <h2 className="text-2xl tracking-[0.5em] font-bold mb-4">
        HORT
      </h2>
      <p className="text-zinc-400">
        Frutas, verduras e legumes selecionados com qualidade premium.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4 text-green-400">
        Contato
      </h3>

      <p className="text-zinc-400">(11) 91368-9013</p>
      <p className="text-zinc-400">contato@hort.com</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4 text-green-400">
        Funcionamento
      </h3>

      <p className="text-zinc-400">Segunda a Sábado</p>
      <p className="text-zinc-400">07h às 20h</p>
      <p className="text-zinc-400">Domingo: 07h as 13h</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4 text-green-400">
        Redes
      </h3>

      <div className="flex gap-4">
        <a href="#" className="text-zinc-400 hover:text-green-400 transition">
          Instagram
        </a>

        <a href="#" className="text-zinc-400 hover:text-green-400 transition">
          WhatsApp
        </a>
      </div>
    </div>
  </div>

  <div className="border-t border-white/10 py-6 text-center text-zinc-500 text-sm">
    
  </div>
</footer>
    </main>
  );
}