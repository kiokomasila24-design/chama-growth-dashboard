import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, XCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    member: "John Kamau",
    action: "Contribution",
    amount: "KES 5,000",
    status: "completed",
    time: "2 hours ago",
  },
  {
    id: 2,
    member: "Mary Wanjiku",
    action: "Loan Request",
    amount: "KES 50,000",
    status: "pending",
    time: "5 hours ago",
  },
  {
    id: 3,
    member: "Peter Omondi",
    action: "Loan Repayment",
    amount: "KES 10,000",
    status: "completed",
    time: "1 day ago",
  },
  {
    id: 4,
    member: "Grace Achieng",
    action: "Contribution",
    amount: "KES 3,000",
    status: "pending",
    time: "1 day ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="border-border/50 shadow-sm">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.status === "completed" ? "bg-success/10" :
                  activity.status === "pending" ? "bg-warning/10" :
                  "bg-destructive/10"
                }`}>
                  {activity.status === "completed" && <CheckCircle className="w-5 h-5 text-success" />}
                  {activity.status === "pending" && <Clock className="w-5 h-5 text-warning" />}
                  {activity.status === "failed" && <XCircle className="w-5 h-5 text-destructive" />}
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{activity.member}</p>
                  <p className="text-xs text-muted-foreground">{activity.action}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm text-foreground">{activity.amount}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
