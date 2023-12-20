import flags from "../../images/flags.svg";

interface Props {
  name: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

const FlagsIcon = ({
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
      <use href={`${flags}#flag-${name}`} />
    </svg>
  );
};

export default FlagsIcon;
