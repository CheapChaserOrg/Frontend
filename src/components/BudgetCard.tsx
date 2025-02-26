import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface BudgetCardProps {
  totalBudget: number;
  spentBudget: number;
  currency?: string;
}

export const BudgetCard = ({ totalBudget, spentBudget, currency = "USD" }: BudgetCardProps) => {
  const percentage = (spentBudget / totalBudget) * 100;
  const remaining = totalBudget - spentBudget;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg font-semibold text-primary">Budget Overview</CardTitle>
        </div>
        <div className="text-sm text-muted-foreground">
          Budget Utilization: {percentage.toFixed(1)}%
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Progress value={percentage} className="h-2" />
          
          <div className="grid grid-cols-2 gap-8">
            <div className="p-4 bg-secondary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Spent</p>
              <p className="text-2xl font-semibold text-accent">
                {currency} {spentBudget.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Remaining</p>
              <p className="text-2xl font-semibold text-primary">
                {currency} {remaining.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};