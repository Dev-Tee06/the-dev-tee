import * as React from "react"
import { ArrowRight } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'darkSecondary'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold transition-all duration-300 ease-out group"
    
    // Fix contrast: primary is now Electric Blue with white text
    const variants = {
      primary: "bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5",
      secondary: "bg-white text-navy border border-gray-200 hover:border-navy hover:-translate-y-0.5 hover:shadow-sm",
      darkSecondary: "bg-transparent text-white border border-white/20 hover:bg-white/10 hover:-translate-y-0.5"
    }

    return (
      <button 
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    )
  }
)
Button.displayName = "Button"
