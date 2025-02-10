import { BudgetCard } from "@/components/BudgetCard";
import { NotificationPanel } from "@/components/NotificationPanel";
import { CurrentTrip } from "@/components/CurrentTrip";

const mockNotifications = [
  {
    id: "1",
    title: "Hotel booking confirmed for Kandy Towers",
    message: "Your hotel booking has been confirmed. Check-in time: 2:00 PM",
    time: "2 hours ago",
    type: "booking" as const,
  },
  {
    id: "2",
    title: "Special offer: 20% off on Sigiriya tours",
    message: "Limited time offer for Sigiriya Rock Fortress tours this weekend!",
    time: "5 hours ago",
    type: "offer" as const,
  },
  {
    id: "3",
    title: "Tour guide assigned: Mr. Kumar",
    message: "Your tour guide has been assigned for your entire trip duration.",
    time: "1 day ago",
    type: "update" as const,
  },
];

const mockActivities = [
  {
    title: "Unawatuna Beach Visit",
    time: "Tomorrow, 9:00 AM",
    weather: "sunny" as const,
  },
  {
    title: "Snorkeling at Hikkaduwa",
    time: "June 18, 10:00 AM",
    weather: "sunny" as const,
  },
  {
    title: "Sunset at Mirissa Beach",
    time: "June 19, 5:30 PM",
    weather: "sunny" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Hero Section with Beach Background */}
      <div 
        className="h-[400px] bg-cover bg-center relative mb-8"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=2000')"
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Your Sri Lankan Adventure
            </h1>
            <p className="text-xl text-white/90">
              Discover paradise on earth
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-20 relative">
          {/* Budget Section */}
          <div className="lg:col-span-2">
            <BudgetCard totalBudget={2500} spentBudget={1200} currency="USD" />
          </div>

          {/* Notifications Section */}
          <div>
            <NotificationPanel notifications={mockNotifications} />
          </div>

          {/* Current Trip Section */}
          <div className="lg:col-span-2">
            <CurrentTrip 
              duration="7"
              dates="June 15 - June 22"
              destinations={["Colombo", "Unawatuna", "Mirissa", "Hikkaduwa"]}
              activities={mockActivities}
            />
          </div>

          {/* Additional Beach Activities Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Beach Activities</h3>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Surfing Lessons</h4>
                    <p className="text-sm text-muted-foreground">Available at Hikkaduwa Beach</p>
                  </div>
                  <span className="text-accent font-semibold">$45/hr</span>
                </div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Whale Watching</h4>
                    <p className="text-sm text-muted-foreground">Mirissa Harbor</p>
                  </div>
                  <span className="text-accent font-semibold">$75/person</span>
                </div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Scuba Diving</h4>
                    <p className="text-sm text-muted-foreground">PADI Certified - Unawatuna</p>
                  </div>
                  <span className="text-accent font-semibold">$120/session</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;