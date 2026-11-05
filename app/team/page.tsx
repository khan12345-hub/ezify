import type { Metadata } from "next";
import { TeamIntro, Leadership, TeamGrid, Values, JoinTeam } from "@/components/team";

export const metadata: Metadata = {
  title: "Our Team — Ezify",
  description:
    "Meet the designers, developers, marketers, sales specialists and accountants behind Ezify.",
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
