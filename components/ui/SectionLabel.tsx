export const SectionLabel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest text-electric ${className}`}>
      {children}
    </span>
  )
}
