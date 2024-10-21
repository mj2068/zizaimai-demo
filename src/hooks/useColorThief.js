import ColorThief from "colorthief";

export function useColorThief() {
  const ct = new ColorThief();

  function getColor(imageUrl) {
    return ct.getColor(imageUrl);
  }

  function getPalette(imageUrl, number) {
    return ct.getPalette(imageUrl, number);
  }

  return { getColor, getPalette };
}
