import type { DetailedHTMLProps, FC } from "react";

interface NavItemProps extends DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  label: string;
}

export const NavItem: FC<NavItemProps> = ({ label }) => {
  return <div>{label}</div>;
};
