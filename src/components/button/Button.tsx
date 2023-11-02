interface buttonProps {
  children: string;
}

function Button({children}: buttonProps) {
  return <button className="px-5 py-3 border border-orange-300 active:bg-orange-300 focus:bg-orange-300 rounded-full font-bold">{children}</button>;
}

export default Button;
