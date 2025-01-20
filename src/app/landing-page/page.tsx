import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";

export default function LandingPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <main className="container mx-auto mt-20 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Gerencie suas finanças com facilidade
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Centralize seus ganhos e gastos, visualize relatórios claros e tome
            as melhores decisões financeiras.
          </p>
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 py-4">
              Comece gratuitamente por 30 dias
            </Button>
          </Link>
        </main>
        <section className="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Controle Total</h2>
            <p>Registre todos os seus ganhos e gastos em um só lugar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Relatórios Detalhados
            </h2>
            <p>Visualize suas finanças com gráficos e tabelas intuitivos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Decisões Inteligentes
            </h2>
            <p>Analise seus dados e tome decisões financeiras informadas.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
