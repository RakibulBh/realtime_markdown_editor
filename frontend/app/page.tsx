import Nav from "@/components/Nav";
import Image from "next/image";

// background #1C2229
// Primary #37626D
// Secondary border/text #79959A
// Card/accent #232B36

export default function Home() {
  return (
    <main className="h-screen bg-[#1C2229]">
      <Nav />
      <p>Hi</p>
    </main>
  );
}
