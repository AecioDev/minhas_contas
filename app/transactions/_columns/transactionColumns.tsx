"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type_badge";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amout",
    header: "Valor",
  },

  {
    accessorKey: "actions",
    header: "#",
  },
];