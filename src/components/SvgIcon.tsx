import { Icon } from "@chakra-ui/react";
import spritemap from "../images/spritemap.svg";

interface Props {
  name: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

const SvgIcon = ({
  name,
  color,
  width = "20px",
  height = "20px",
  style,
}: Props) => {
  return (
    <Icon
      width={width}
      height={height}
      style={{ cursor: "pointer", ...style }}
      color={color}
      fill={color}
    >
      <use href={`${spritemap}#icon-${name}`} />
    </Icon>
  );
};

export default SvgIcon;
