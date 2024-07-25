type IconLeftProps = {
  color?: string;
};

export default function IconRight({ color }: IconLeftProps) {
  return (
    <svg
      width="12"
      height="19"
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.17285 0.624933L11.3155 9.49972L1.17285 18.3745"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
