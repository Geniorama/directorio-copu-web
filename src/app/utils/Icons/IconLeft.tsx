
type IconLeftProps = {
  color?: string;
}

export default function IconLeft({color}: IconLeftProps) {
  return (
    <svg
        width="12"
        height="19"
        viewBox="0 0 12 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8272 18.3751L0.684536 9.50028L10.8271 0.625488"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  );
}
