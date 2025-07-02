export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`py-[0.7rem] flex items-start justify-center gap-3 text-[14px] rounded-lg px-8 font-[600] bg-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
