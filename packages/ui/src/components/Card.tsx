import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Card = ({ className, title, children, ...props }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg border shadow-sm p-4 ${className}`}
      {...props}
    >
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};
