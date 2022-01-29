function sequentialSizes(val) {
  let answer = "";
  // Altere apenas o código abaixo desta linha
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High"
      break;
  }
  // Altere apenas o código acima desta linha
  return answer;
}

sequentialSizes(1);