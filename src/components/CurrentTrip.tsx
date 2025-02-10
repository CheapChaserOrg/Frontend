import { Calendar, MapPin, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Activity {
  title: string;
  time: string;
  weather: "sunny" | "cloudy";
}

interface CurrentTripProps {
  duration: string;
  dates: string;
  destinations: string[];
  activities: Activity[];
}

export const CurrentTrip = ({ duration, dates, destinations, activities }: CurrentTripProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary">Current Trip</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3">
          <Calendar className="h-5 w-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Duration</h4>
            <p className="text-sm text-muted-foreground">{duration} Days ({dates})</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-primary mt-1" />
          <div>
            <h4 className="font-medium">Destinations</h4>
            <p className="text-sm text-muted-foreground">{destinations.join(" → ")}</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Upcoming Activities</h4>
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <Sun className="h-5 w-5 text-accent" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};