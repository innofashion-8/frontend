import AboutSection from '@/components/About';
import Timeline from '@/components/Timeline';
import ContactPage from '@/components/ContactUs';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <AboutSection />
      <Timeline />
      <ContactPage />
    </main>
  );
}
