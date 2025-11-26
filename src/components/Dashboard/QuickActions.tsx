import { Button } from "@/components/ui/button";
import { Plus, DollarSign, FileText, Bell } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Button className="h-auto py-4 flex flex-col gap-2 bg-primary hover:bg-primary/90">
        <Plus className="w-5 h-5" />
        <span className="font-medium">Add Contribution</span>
      </Button>
      
      <Button className="h-auto py-4 flex flex-col gap-2 bg-secondary hover:bg-secondary/90">
        <DollarSign className="w-5 h-5" />
        <span className="font-medium">Issue Loan</span>
      </Button>
      
      <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-2">
        <FileText className="w-5 h-5" />
        <span className="font-medium">View Report</span>
      </Button>
      
      <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 border-2">
        <Bell className="w-5 h-5" />
        <span className="font-medium">Send Reminder</span>
      </Button>
    </div>
  );
}
