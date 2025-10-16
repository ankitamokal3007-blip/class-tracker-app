import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface AttendanceRecord {
  id: number;
  name: string;
  date: string;
  status: "present" | "absent";
  checkIn?: string;
}

const Records = () => {
  const [records] = useState<AttendanceRecord[]>([
    { id: 1, name: "John Smith", date: "2025-10-16", status: "present", checkIn: "09:15 AM" },
    { id: 2, name: "Sarah Johnson", date: "2025-10-16", status: "present", checkIn: "09:20 AM" },
    { id: 3, name: "Mike Davis", date: "2025-10-16", status: "absent" },
    { id: 4, name: "Emily Brown", date: "2025-10-16", status: "present", checkIn: "09:10 AM" },
    { id: 5, name: "John Smith", date: "2025-10-15", status: "present", checkIn: "09:12 AM" },
    { id: 6, name: "Sarah Johnson", date: "2025-10-15", status: "present", checkIn: "09:18 AM" },
    { id: 7, name: "Mike Davis", date: "2025-10-15", status: "present", checkIn: "09:25 AM" },
    { id: 8, name: "Emily Brown", date: "2025-10-15", status: "absent" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Attendance Records
          </h1>
          <p className="text-muted-foreground">View historical attendance data</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Records</CardTitle>
                <CardDescription>Complete attendance history</CardDescription>
              </div>
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Filter by Date
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Check-in Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {records.map((record) => (
                    <TableRow key={record.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{record.name}</TableCell>
                      <TableCell>
                        {new Date(record.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={record.status === "present" ? "default" : "destructive"}
                          className="capitalize"
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {record.checkIn || "N/A"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Records;
