import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema, type Room } from "@shared/schema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateBooking } from "@/hooks/use-lodging";
import { Loader2, CalendarIcon } from "lucide-react";
import { useState } from "react";

// Extend schema for frontend validation
const formSchema = insertBookingSchema.extend({
  roomId: z.number(),
  guestName: z.string().min(2, "Name is required"),
  guestEmail: z.string().email("Invalid email address"),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
});

type FormValues = z.infer<typeof formSchema>;

export function BookingForm({ room }: { room: Room }) {
  const { mutate, isPending } = useCreateBooking();
  const [success, setSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomId: room.id,
      guestName: "",
      guestEmail: "",
      checkIn: "",
      checkOut: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        setSuccess(true);
        form.reset();
      },
    });
  };

  if (success) {
    return (
      <div className="bg-primary/5 p-8 rounded-2xl text-center border border-primary/10">
        <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
          <CalendarIcon className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-primary mb-2">Request Received!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for choosing SerenityLodge. We will confirm your booking via email shortly.
        </p>
        <Button 
          onClick={() => setSuccess(false)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
        >
          Book Another Room
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-border/50">
      <h3 className="font-display text-2xl font-bold text-primary mb-6">Book Your Stay</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="guestName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="rounded-xl border-border bg-muted/30 focus:bg-white transition-colors h-11" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="guestEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" type="email" {...field} className="rounded-xl border-border bg-muted/30 focus:bg-white transition-colors h-11" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">Check In</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="rounded-xl border-border bg-muted/30 focus:bg-white transition-colors h-11" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">Check Out</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="rounded-xl border-border bg-muted/30 focus:bg-white transition-colors h-11" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-dashed border-border mt-4">
            <span className="text-muted-foreground text-sm">Total per night</span>
            <span className="font-bold text-xl text-primary">${(room.price / 100).toFixed(0)}</span>
          </div>

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              "Confirm Booking"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
