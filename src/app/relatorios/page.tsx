'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

export default function RelatoriosPage() {
  const [tipo, setTipo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para gerar o relatório
    console.log('Filtros:', { tipo, categoria, descricao })
  }

  // Dados de exemplo para o gráfico de pizza
  const dataPie = [
    { name: 'Categoria 1', value: 400 },
    { name: 'Categoria 2', value: 300 },
    { name: 'Categoria 3', value: 300 },
    { name: 'Categoria 4', value: 200 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  // Dados de exemplo para o gráfico de barras
  const dataBar = [
    { mes: 'Jan', ganhos: 4000, gastos: 2400 },
    { mes: 'Fev', ganhos: 3000, gastos: 1398 },
    { mes: 'Mar', ganhos: 2000, gastos: 9800 },
    { mes: 'Abr', ganhos: 2780, gastos: 3908 },
    { mes: 'Mai', ganhos: 1890, gastos: 4800 },
    { mes: 'Jun', ganhos: 2390, gastos: 3800 },
    { mes: 'Jul', ganhos: 3490, gastos: 4300 },
    { mes: 'Ago', ganhos: 4000, gastos: 2400 },
    { mes: 'Set', ganhos: 3000, gastos: 1398 },
    { mes: 'Out', ganhos: 2000, gastos: 9800 },
    { mes: 'Nov', ganhos: 2780, gastos: 3908 },
    { mes: 'Dez', ganhos: 1890, gastos: 4800 },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Relatórios</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo</Label>
                <Select onValueChange={setTipo}>
                  <SelectTrigger id="tipo">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ganho">Ganho</SelectItem>
                    <SelectItem value="gasto">Gasto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="categoria">Categoria</Label>
                <Select onValueChange={setCategoria}>
                  <SelectTrigger id="categoria">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salario">Salário</SelectItem>
                    <SelectItem value="alimentacao">Alimentação</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Input
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
            </div>
            <Button type="submit">Gerar Relatório</Button>
          </form>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Gráfico de Categorias</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ganhos e Gastos por Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="ganhos" fill="#82ca9d" name="Ganhos" />
                <Bar dataKey="gastos" fill="#8884d8" name="Gastos" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

