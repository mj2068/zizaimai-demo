import { Image, Radio } from "antd";
import { ColorThemes } from "../App";

export default function Header({
  colorThemes,
  selectedColorTheme,
  setSelectedColorTheme,
}: {
  colorThemes: { id: string; label: string; imageHref: string }[];
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
        {colorThemes.map((theme) => (
          <Radio key={theme.id} value={theme.id}>
            <Image src={theme.imageHref} width={16} />
          </Radio>
        ))}
      </Radio.Group>
    </header>
  );
}
