//size: small, medium, large, xl
export default function RoundButton({
  text,
  size,
  onClick,
}: {
  text: string;
  icon?: JSX.Element;
  size: string;
  onClick?: () => void | undefined;
}) {
  console.log(size);
  return (
    <button
      onClick={onClick}
      className={`RoundButton bg-[var(--theme-brown)] rounded-md hover:bg-[var(--theme-brown)] transition-all py-2 xs:w-[18.5rem] sm:w-[14.5rem] xl:w-[15.5rem] text-gray-200`}
    >
      <span className={"text-md bg-transparent"}>{text}</span>
    </button>
  );
}
