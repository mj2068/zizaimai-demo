import { Radio } from "antd";
import { ColorThemes } from "../App";

export default function Header({
  colorThemes,
  selectedColorTheme,
  setSelectedColorTheme,
}: {
  colorThemes: string[];
  selectedColorTheme: string;
  setSelectedColorTheme: (v: ColorThemes) => void;
}) {
  //

  return (
    <header>
      <h1>示例</h1>
      <span>zizaimai.space</span>
      <Radio.Group
        optionType="button"
        buttonStyle="solid"
        value={selectedColorTheme}
        onChange={(v) => setSelectedColorTheme(v.target.value)}
      >
        {colorThemes.map((t) => (
          <Radio key={t} value={t}>
            {t}
          </Radio>
        ))}
      </Radio.Group>
    </header>
  );
}
