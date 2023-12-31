import spritemap from "../../images/spritemap.svg";

interface Props {
  name: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

const SvgIcon = ({
  className,
  name,
  color,
  width = "20px",
  height = "20px",
  style,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      style={{ cursor: "pointer", ...style }}
      color={color}
      fill={color}
      className={className}
    >
      <use href={`${spritemap}#icon-${name}`} />
    </svg>
  );
};

export default SvgIcon;
