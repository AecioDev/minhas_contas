import { transactionColumns } from "./_columns/transactionColumns";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import AddTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  // acessar as transações do meu banco
  const transactions = await db.transaction.findMany({});

  return (
    <div className="p-6 space-y-6">
      {/* Titulo e Botão */}
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
