"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Car, Clock, MapPin, Plane, Search, Users } from "lucide-react"

const locations = [
  "Dubai International Airport (DXB)",
  "Abu Dhabi International Airport",
  "Dubai Mall",
  "Burj Khalifa",
  "Palm Jumeirah",
  "Marina Bay",
  "Downtown Dubai",
]

const times = [
  "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
  "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00", "22:00", "23:00",
]

export function BookingEngine() {
  const [activeTab, setActiveTab] = useState("rental")

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-14 bg-card rounded-t-xl rounded-b-none border border-b-0 border-border">
          <TabsTrigger
            value="rental"
            className="flex items-center gap-2 h-12 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg m-1"
          >
            <Car className="h-5 w-5" />
            Rent a Car
          </TabsTrigger>
          <TabsTrigger
            value="transfer"
            className="flex items-center gap-2 h-12 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg m-1"
          >
            <Plane className="h-5 w-5" />
            Transfer
          </TabsTrigger>
        </TabsList>

        <div className="bg-card rounded-b-xl border border-t-0 border-border p-6 shadow-lg">
          <TabsContent value="rental" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pick-up Location */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Pick-up Location
                </Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Pick-up Date */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Pick-up Date
                </Label>
                <Input type="date" className="h-12" />
              </div>

              {/* Pick-up Time */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Pick-up Time
                </Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {times.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Drop-off Date */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Drop-off Date
                </Label>
                <Input type="date" className="h-12" />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base">
                <Search className="h-5 w-5 mr-2" />
                Search Available Cars
              </Button>
              <p className="text-sm text-muted-foreground">
                Different drop-off location? <button type="button" className="text-primary hover:underline">Add here</button>
              </p>
            </div>
          </TabsContent>

          <TabsContent value="transfer" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* From Location */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Plane className="h-4 w-4" />
                  From (Airport/Hotel)
                </Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Pick-up point" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* To Location */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  To (Destination)
                </Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Drop-off point" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Transfer Date
                </Label>
                <Input type="date" className="h-12" />
              </div>

              {/* Passengers */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Users className="h-4 w-4" />
                  Passengers
                </Label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Passenger" : "Passengers"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base">
                <Search className="h-5 w-5 mr-2" />
                Get Transfer Quote
              </Button>
              <p className="text-sm text-muted-foreground">
                Need a round trip? <button type="button" className="text-primary hover:underline">Add return</button>
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
