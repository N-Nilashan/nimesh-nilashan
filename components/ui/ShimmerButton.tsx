import React from 'react'

const ShimmerButton = ({
    title,icon,position,handleClick, otherClasses
}: {
        title: string; icon: React.ReactNode;
        position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    
      <button className={` relative  inline-flex h-12 animate-shimmer items-center
         justify-center rounded-lg border border-slate-900
         bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
         bg-[length:200%_100%] px-6 font-medium text-white
         transition-colors focus:outline-none gap-2 
          md:w-30 md:mt-10 ${otherClasses} `}
      onClick={handleClick}
      >
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </button>
  
       
      
  )
}

export default ShimmerButton
