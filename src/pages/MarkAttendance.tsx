import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface Person {
  id: number;
  name: string;
  role: string;
  status?: "present" | "absent";
}

const MarkAttendance = () => {
  const { toast } = useToast();
  const [people, setPeople] = useState<Person[]>([
    { id: 1, name: "Aanand Mhetre", role: "Employee" },
    { id: 2, name: "John Smith", role: "Employee" },
    { id: 3, name: "Sarah Johnson", role: "Manager" },
    { id: 4, name: "Mike Davis", role: "Employee" },
    { id: 5, name: "Emily Brown", role: "Supervisor" },
    { id: 6, name: "David Wilson", role: "Employee" },
    { id: 7, name: "Lisa Anderson", role: "Employee" },
  ]);

  const markAttendance = (id: number, status: "present" | "absent") => {
    setPeople(people.map(person => 
      person.id === id ? { ...person, status } : person
    ));
  };

  const submitAttendance = () => {
    const marked = people.filter(p => p.status).length;
    toast({
      title: "Attendance Submitted",
      description: `Successfully marked attendance for ${marked} people.`,
    });
  };

  const markedCount = people.filter(p => p.status).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Mark Attendance
            </h1>
            <p className="text-muted-foreground">Mark today's attendance for all members</p>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-2">
            {markedCount} / {people.length} marked
          </Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Today's Attendance</CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString("en-US", { 
                weekday: "long", 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {people.map((person) => (
                <div
                  key={person.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{person.name}</p>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {person.status && (
                      <Badge 
                        variant={person.status === "present" ? "default" : "destructive"}
                        className="mr-2"
                      >
                        {person.status}
                      </Badge>
                    )}
                    <Button
                      onClick={() => markAttendance(person.id, "present")}
                      variant={person.status === "present" ? "default" : "outline"}
                      size="sm"
                      className="gap-1"
                    >
                      <CheckCircle className="h-4 w-4" />
                      Present
                    </Button>
                    <Button
                      onClick={() => markAttendance(person.id, "absent")}
                      variant={person.status === "absent" ? "destructive" : "outline"}
                      size="sm"
                      className="gap-1"
                    >
                      <XCircle className="h-4 w-4" />
                      Absent
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <Button 
                onClick={submitAttendance} 
                size="lg" 
                className="w-full"
                disabled={markedCount === 0}
              >
                Submit Attendance ({markedCount} marked)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarkAttendance;
