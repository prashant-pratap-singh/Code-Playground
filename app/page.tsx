import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";
import Image from "next/image"; 

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <h1 className="text-4xl font-bold text-rose-500">Home</h1>
      <UserButton/>
    </div>
  );
}
