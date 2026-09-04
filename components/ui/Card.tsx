import * as React from "react"

export const Card = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={`border border-border-subtle bg-white rounded-md shadow-sm p-6 lg:p-8 transition-all hover:-translate-y-[3px] hover:border-electric/30 duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
