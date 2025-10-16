import { Users, CheckCircle, XCircle, TrendingUp } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data - in a real app, this would come from a backend
  const stats = {
    totalPeople: 48,
    presentToday: 42,
    absentToday: 6,
    attendanceRate: 87.5,
  };

  const recentActivity = [
    { name: "John Smith", status: "present", time: "09:15 AM" },
    { name: "Sarah Johnson", status: "present", time: "09:20 AM" },
    { name: "Mike Davis", status: "absent", time: "N/A" },
    { name: "Emily Brown", status: "present", time: "09:10 AM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground">Track and manage attendance efficiently</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total People"
            value={stats.totalPeople}
            icon={Users}
            trend="All registered members"
          />
          <StatCard
            title="Present Today"
            value={stats.presentToday}
            icon={CheckCircle}
            variant="success"
            trend="+5 from yesterday"
          />
          <StatCard
            title="Absent Today"
            value={stats.absentToday}
            icon={XCircle}
            variant="destructive"
            trend="-2 from yesterday"
          />
          <StatCard
            title="Attendance Rate"
            value={`${stats.attendanceRate}%`}
            icon={TrendingUp}
            variant="default"
            trend="This month average"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest attendance records from today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      {activity.status === "present" ? (
                        <CheckCircle className="h-5 w-5 text-success" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                      <div>
                        <p className="font-medium">{activity.name}</p>
                        <p className="text-sm text-muted-foreground capitalize">{activity.status}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/mark-attendance">
                <Button className="w-full justify-start" size="lg" variant="default">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Mark Attendance
                </Button>
              </Link>
              <Link to="/records">
                <Button className="w-full justify-start" size="lg" variant="outline">
                  View All Records
                </Button>
              </Link>
              <Link to="/people">
                <Button className="w-full justify-start" size="lg" variant="outline">
                  Manage People
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
