import { ArrowDownUp } from "lucide-react";
import { Button } from "../_components/ui/button";
import { transactionColumns } from "./_columns/transactionColumns";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
//import { db } from "../_lib/prisma";

const TransactionsPage = async () => {
  // acessar as transações do meu banco
  const transactions = await db.transaction.findMany({});

  return (
    <div className="p-6 space-y-6">
      {/* Titulo e Botão */}
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adicionar Transação <ArrowDownUp />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
