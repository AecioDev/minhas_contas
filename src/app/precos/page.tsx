import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrecosPage() {
  const planos = [
    {
      nome: 'Grátis',
      preco: '0',
      descricao: 'Experimente por 30 dias',
      recursos: ['Lançamentos básicos', 'Relatórios simples', 'Limite de 100 transações'],
    },
    {
      nome: 'Básico',
      preco: '9,90',
      descricao: 'Para uso pessoal',
      recursos: ['Lançamentos ilimitados', 'Relatórios detalhados', 'Categorias personalizadas', 'Suporte por email'],
    },
    {
      nome: 'Completo',
      preco: '19,90',
      descricao: 'Para uso avançado',
      recursos: ['Tudo do plano Básico', 'Múltiplas contas', 'Planejamento financeiro', 'Suporte prioritário'],
    },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Ofertas e Preços</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {planos.map((plano) => (
          <Card key={plano.nome} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plano.nome}</CardTitle>
              <CardDescription>{plano.descricao}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">R$ {plano.preco}<span className="text-sm font-normal">/mês</span></p>
              <ul className="list-disc list-inside space-y-2">
                {plano.recursos.map((recurso, index) => (
                  <li key={index}>{recurso}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Escolher Plano</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

