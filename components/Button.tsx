import React from "react"

interface ButtonProps {
  children: React.ReactNode
  onClick: (e: any) => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="[ Button ] md:px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
