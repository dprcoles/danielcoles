import React from "react"

interface LanguagePillProps {
  language: string
}

const LanguagePill: React.FC<LanguagePillProps> = ({ language }) => {
  const styles = `${
    language === "JavaScript"
      ? "bg-gradient-to-r from-javascript-from to-javascript-to text-black"
      : ""
  }${language === "Go" ? "bg-gradient-to-r from-go-from to-go-to text-white" : ""}${
    language === "Rust" ? "bg-gradient-to-r from-rust-from to-rust-to text-white" : ""
  }${
    language === "TypeScript"
      ? "bg-gradient-to-r from-typescript-from to-typescript-to text-white"
      : ""
  }`

  return (
    <span className={`[ ${language} ] ${styles} p-2 rounded-md`}>
      <b>{language}</b>
    </span>
  )
}

export default LanguagePill
