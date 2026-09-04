"use client"
import * as React from "react"
import { useState } from "react"

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string
  isTextArea?: boolean
  error?: string
}

export const FormField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({ label, isTextArea, error, className = "", required, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    
    const Component = isTextArea ? "textarea" : "input"
    const baseClasses = `w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-electric focus:border-electric focus:shadow-[0_0_10px_rgba(37,99,235,0.1)] transition-all bg-white ${error ? "border-red-500" : "border-border-subtle"}`
    
    return (
      <div className={`flex flex-col space-y-1.5 w-full ${className}`}>
        <label className={`text-sm font-bold transition-colors ${isFocused ? 'text-electric' : 'text-text-primary'}`}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <Component 
          ref={ref as any}
          className={`${baseClasses} ${isTextArea ? 'min-h-[120px] resize-y' : ''}`}
          onFocus={(e) => {
             setIsFocused(true);
             if (props.onFocus) props.onFocus(e as any);
          }}
          onBlur={(e) => {
             setIsFocused(false);
             if (props.onBlur) props.onBlur(e as any);
          }}
          {...props}
        />
        {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>
    )
  }
)
FormField.displayName = "FormField"
