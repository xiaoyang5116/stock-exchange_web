import spritemap from "../images/spritemap.svg";

interface Props {
  name: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

const SvgIcon = ({ name, color, width = 20, height = 20, style }: Props) => {
  return (
    <svg width={width} height={height} style={style} color={color} fill={color}>
      <use href={`${spritemap}#icon-${name}`} />
    </svg>
  );
};

export default SvgIcon;
