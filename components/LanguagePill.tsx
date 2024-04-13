import React from "react"

interface LanguagePillProps {
  language: string
}

const LanguagePill = ({ language }: LanguagePillProps) => {
  return (
    <span className="p-2 rounded-lg shadow-lg ring-2 ring-offset-black/5 ring-violet-500/20 bg-gradient-to-tl from-violet-700/10 to-violet-900/30">
      <b>{language}</b>
    </span>
  )
}

export default LanguagePill
