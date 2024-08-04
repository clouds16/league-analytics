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
    () =>
      (champStat, otherChampStat, champLevel, otherChampLevel, isAatrox) => {
        const champValue = calculateStatValue(champStat, champLevel);
        const otherChampValue = calculateStatValue(
          otherChampStat,
          otherChampLevel
        );
        if (champValue > otherChampValue) {
          return isAatrox
            ? "rgba(144, 238, 144, 0.5)"
            : "rgba(255, 99, 71, 0.5)";
        } else if (otherChampValue > champValue) {
          return isAatrox
            ? "rgba(255, 99, 71, 0.5)"
            : "rgba(144, 238, 144, 0.5)";
        }
        return "";
      },
    []
  );

  return { getStatColor, calculateStatValue, formatStat };
}

export default useChampionStats;
