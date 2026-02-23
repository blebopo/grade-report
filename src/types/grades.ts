export interface GradeRange {
  min: number;
  max: number;
  symbol: string;
  description: string;
  color: string;
  percentageColor: string;
  gradientFrom: string;
}

export const gradeRanges: GradeRange[] = [
  {
    min: 80,
    max: 100,
    symbol: "A",
    description: "Excellent",
    color: "#03FFA275",
    percentageColor: "#03FFA2",
    gradientFrom: "#029961",
  },
  {
    min: 70,
    max: 79,
    symbol: "B",
    description: "Meritorious",
    color: "#02679975",
    percentageColor: "#026799",
    gradientFrom: "#026799",
  },
  {
    min: 60,
    max: 69,
    symbol: "C",
    description: "Satisfactory",
    color: "#FFFF0375",
    percentageColor: "#FFFF03",
    gradientFrom: "#997B02",
  },
  {
    min: 50,
    max: 59,
    symbol: "D",
    description: "Needs Improvement",
    color: "#FF9E0175",
    percentageColor: "FF9E01",
    gradientFrom: "#8C6600",
  },
  {
    min: 0,
    max: 40,
    symbol: "F",
    description: "Fail",
    color: "#FF1C0375",
    percentageColor: "#FF1C03",
    gradientFrom: "#993902",
  },
];
