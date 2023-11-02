interface NavButtonProps {
  children: string;
}

function NavButton({children}: NavButtonProps) {
  return <button className="h-full w-20 hover:bg-slate-500 hover:bg-opacity-25">{children}</button>;
}

export default NavButton;
