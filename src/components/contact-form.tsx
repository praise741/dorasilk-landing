import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  // DialogClose,
  DialogContent,
  // DialogFooter,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
// import { useState } from "react";
import successimg from "@/assets/success.png";

export function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Delivery Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-8">
              <div className="grid gap-3">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="090000000000"
                  required
                />
              </div>

              <div className="flex flex-col gap-8 sm:flex-row">
                <div className="grid gap-3 sm:w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="grid gap-3 sm:w-full">
                  <Label htmlFor="order">Order ID</Label>
                  <Input
                    id="order"
                    type="text"
                    placeholder="Enter order ID"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Enter message" className="min-h-32" />
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    className="w-fit mx-auto px-6 rounded-full bg-gold-2 ease-in-out duration-350 hover:shadow-[0_0_20px_#D4AF37] hover:bg-gold-2 hover:-translate-y-1"
                  >
                    Contact us
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                  <DialogTitle className="hidden">
                    Thanks for contacting us
                  </DialogTitle>
                  <div className="flex flex-col gap-6">
                    <div className="w-fit mx-auto">
                      <img
                        src={successimg}
                        alt="success"
                        className="animate-rotate-y"
                      />
                    </div>
                    <div className="text-black font-medium text-xl w-fit mx-auto text-center">
                      <p className="">
                        Thank you for contacting{" "}
                        <span className="text-gold-2">Dorasilk.</span>
                      </p>
                      <p>You will receive our response soon</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
