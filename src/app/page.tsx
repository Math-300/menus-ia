import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-white font-serif">MenuOS</h1>
        <p className="text-lg text-gray-400 mb-12 max-w-md">
          Plataforma de menús digitales con IA
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/r/demo-grill"
            className="px-8 py-4 bg-brand-primary text-white rounded-xl hover:bg-brand-primary/80 transition-all font-semibold shadow-lg shadow-brand-primary/30"
          >
            Ver Demo Restaurante
          </Link>
          <Link
            href="/admin"
            className="px-8 py-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all font-semibold border border-gray-700"
          >
            Panel Admin
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">🍽️</div>
            <h3 className="text-white font-semibold mb-2">Menús Digitales</h3>
            <p className="text-gray-500 text-sm">Experiencias interactivas para tus clientes</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-white font-semibold mb-2">IA Integrada</h3>
            <p className="text-gray-500 text-sm">Generación de contenido con inteligencia artificial</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-white font-semibold mb-2">PWA Ready</h3>
            <p className="text-gray-500 text-sm">Funciona offline como app nativa</p>
          </div>
        </div>
      </div>
    </main>
  );
}
