import { Bell, CheckCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "booking" | "update" | "offer";
}

interface NotificationPanelProps {
  notifications: Notification[];
}

export const NotificationPanel = ({ notifications }: NotificationPanelProps) => {
  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "booking":
        return <CheckCircle className="h-5 w-5 text-primary" />;
      case "offer":
        return <Info className="h-5 w-5 text-accent" />;
      default:
        return <Bell className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-primary">
          Notifications
        </CardTitle>
        <div className="flex items-center space-x-2">
          <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
            {notifications.length} New
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex space-x-3 border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div className="mt-1">{getIcon(notification.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};