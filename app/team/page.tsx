import type { Metadata } from "next";
import { TeamIntro, Leadership, TeamGrid, Values, JoinTeam } from "@/components/team";

export const metadata: Metadata = {
  title: "Meet Our Team | The People Behind Ezify",
  description:
    "Meet the marketers, developers, sales specialists and accountants who help businesses across Canada and the USA grow, one dedicated team at a time.",
};

export default function TeamPage() {
  return (
    <>
      <TeamIntro />
      <Leadership />
      <TeamGrid />
      <Values />
      <JoinTeam />
    </>
  );
}
