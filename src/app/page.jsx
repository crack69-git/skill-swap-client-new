import BannerSection from "@/Components/MainComponents/BannerSection";
import FeatureSection from "@/Components/MainComponents/FeatureSection";
import Herosection from "@/Components/MainComponents/Herosection";
import StatSection from "@/Components/MainComponents/StatSection";
import TopFreelancerSection from "@/Components/MainComponents/TopFreelancerSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Herosection></Herosection>
      <StatSection></StatSection>
      <FeatureSection></FeatureSection>
      <TopFreelancerSection></TopFreelancerSection>
      <BannerSection></BannerSection>
    </div>
  );
}
