import { useMemo } from "react";

function useChampionStats() {
  const calculateStatValue = (stat, level) => {
    if (typeof stat === "object" && "flat" in stat) {
      let baseValue = stat.flat;
      let growth = stat.perLevel || 0;
      return baseValue + growth * (level - 1);
    }
    return stat;
  };

  const formatStat = (value, level) => {
    if (typeof value === "object" && "flat" in value) {
      let totalValue = calculateStatValue(value, level);
      let formattedValue = totalValue.toFixed(1);
      if (value.perLevel > 0) {
        formattedValue += ` (+${value.perLevel} per level)`;
      }
      return formattedValue;
    }
    return value.toString();
  };

  const getStatColor = useMemo(
    () => (champStat, otherChampStat, champLevel, otherLevel) => {
      const champValue = calculateStatValue(champStat, champLevel);
      const otherChampValue = calculateStatValue(otherChampStat, otherLevel);

      if (champValue > otherChampValue) {
        return "rgba(144, 238, 144, 0.5)"; // Light green
      } else if (otherChampValue > champValue) {
        return "rgba(255, 99, 71, 0.5)"; // Light red
      }
      return ""; // No color if stats are equal
    },
    []
  );

  return { getStatColor, calculateStatValue, formatStat };
}

export default useChampionStats;
