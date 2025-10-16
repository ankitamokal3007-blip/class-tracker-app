import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Search, Mail, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Person {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  attendanceRate: number;
}

const People = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [people] = useState<Person[]>([
    { id: 1, name: "Aanand Mhetre", role: "Employee", email: "aanand.mhetre@company.com", phone: "+91 98765-43210", attendanceRate: 96 },
    { id: 2, name: "John Smith", role: "Employee", email: "john.smith@company.com", phone: "+1 234-567-8901", attendanceRate: 95 },
    { id: 3, name: "Sarah Johnson", role: "Manager", email: "sarah.j@company.com", phone: "+1 234-567-8902", attendanceRate: 98 },
    { id: 4, name: "Mike Davis", role: "Employee", email: "mike.d@company.com", phone: "+1 234-567-8903", attendanceRate: 87 },
    { id: 5, name: "Emily Brown", role: "Supervisor", email: "emily.b@company.com", phone: "+1 234-567-8904", attendanceRate: 92 },
    { id: 6, name: "David Wilson", role: "Employee", email: "david.w@company.com", phone: "+1 234-567-8905", attendanceRate: 89 },
    { id: 7, name: "Lisa Anderson", role: "Employee", email: "lisa.a@company.com", phone: "+1 234-567-8906", attendanceRate: 94 },
  ]);

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addPerson = () => {
    toast({
      title: "Add New Person",
      description: "This feature will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              People Management
            </h1>
            <p className="text-muted-foreground">Manage all registered members</p>
          </div>
          <Button onClick={addPerson} className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add New Person
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPeople.map((person) => (
            <Card key={person.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{person.name}</CardTitle>
                      <CardDescription>{person.role}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{person.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{person.phone}</span>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Attendance Rate</span>
                    <Badge 
                      variant={person.attendanceRate >= 90 ? "default" : "secondary"}
                    >
                      {person.attendanceRate}%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
