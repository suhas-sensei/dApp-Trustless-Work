"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useProfile from "./hooks/profile-section.hook";

interface ProfileSectionProps {
  onSave: (data: ProfileForm) => void;
  walletAddress: string;
}

export interface ProfileForm {
  identification?: string;
  firstName: string;
  lastName: string;
  wallet: string;
}

const ProfileSection = ({ onSave, walletAddress }: ProfileSectionProps) => {
  const { form, onSubmit } = useProfile({
    walletAddress,
    onSave,
  });

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="identification"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identification</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="wallet"
            render={({ field }) => (
              <FormItem>
                <Input type="hidden" {...field} />
              </FormItem>
            )}
          />
          <Button type="submit">Save Profile</Button>
        </form>
      </Form>
    </section>
  );
};

export default ProfileSection;
