type Props = {
  label: String;
};

function Hero(props: Props) {
  const { label } = props;

  return (
    <div className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-accent">
      <div className="size-1.5 rounded-full bg-accent" />
      <span className="text-accent">{label}</span>
    </div>
  );
}

export { Hero };
