import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TrnTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TrnTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Ganho
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger font-bold text-danger hover:bg-danger bg-opacity-10">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        Gasto
      </Badge>
    );
  }

  if (transaction.type === TransactionType.INVESTMENT) {
    return (
      <Badge className="bg-white font-bold text-blue-500 hover:bg-white bg-opacity-10">
        <CircleIcon className="mr-2 fill-blue-500" size={10} />
        Investimento
      </Badge>
    );
  }
};

export default TransactionTypeBadge;
