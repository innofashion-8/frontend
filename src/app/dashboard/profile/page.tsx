import ProfileClient from "@/components/pages/ProfileClient";
import Beams from "@/components/ui/Beams";
import palette from "@/config/palette";
import { Metadata } from "next";

export default function ProfilePage() {
  return (
    <div>
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
            <Beams beamWidth={3} beamHeight={30} beamNumber={20} lightColor={palette.greige} speed={2} noiseIntensity={1.75} scale={0.2} rotation={30} />
        </div>
        <ProfileClient />
    </div>
  );
}