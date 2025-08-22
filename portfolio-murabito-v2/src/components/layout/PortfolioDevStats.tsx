import StatsCount from "@/components/ui/statscount";
import LustreText from "../ui/lustretext";
 
const stats = [
  { value: 20, suffix: "+", label: "GitHub Repositories" },
  { value: 100, suffix: "K+", label: "Lines of Code"},
  { value: 500, suffix: "+", label: "Commits"},
  { value: 9999, suffix: "B+", label: "Insults to JavaScript"},

];

const PortfolioDevStats = () => {
  return (
    <>
      <StatsCount 
        className="mb-0"
        stats={stats}
        showDividers={false}
      />
    </>
  );
}

export default PortfolioDevStats;