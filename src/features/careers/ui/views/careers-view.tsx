import { CareersHero } from "../components/careers-hero";
import { OpenPositionsSection } from "../components/open-positions-section";
import { WorkingAtPECSection } from "../components/working-at-pec-section";
import { DevelopmentSection } from "../components/development-section";
import { BenefitsSection } from "../components/benefits-section";
import { HistorySection } from "@/features/home/ui/components/history-section";
import type { ALL_JOBS_RESULT } from "../../lib/queries";

interface CareersViewProps {
  jobs?: ALL_JOBS_RESULT[];
}

export default function CareersView({ jobs }: CareersViewProps) {
  return (
    <>
      <CareersHero />
      <OpenPositionsSection jobs={jobs} />
      <WorkingAtPECSection />
      <DevelopmentSection />
      {/* <BenefitsSection /> */}
      <div id="history">
        <HistorySection />
      </div>
    </>
  );
}
