import Navbar from '@/components/opening/navbar';
import Competition from '@/components/opening/competition';
import Footer from '@/components/opening/footer';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navbar />
      <div className="relative z-20">
        <section className="h-screen w-full pointer-events-none" />
        <Competition />
      </div>
      <Footer/>
    </main>
  );
}