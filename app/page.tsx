import { RegistrationForm } from "@/components/ui/registration-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background/50 flex flex-col items-center justify-center px-2 md:p-8">
      <div className="w-full p-4 max-w-[440px] md:max-w-[60%] lg:max-w-[30%]  bg-card/30 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-border/10">
          <RegistrationForm />
      </div>
    </main>
  );
}