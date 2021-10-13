import React from "react"

interface LanguagePillProps {
  language: string
}

const LanguagePill: React.FC<LanguagePillProps> = ({ language }) => {
  const styles = `${
    language === "JavaScript" ? "bg-javascript-bg ring-javascript-ring text-black" : ""
  }${language === "Go" ? "bg-go-bg ring-go-ring text-white" : ""}${
    language === "Rust" ? "bg-rust-bg ring-rust-ring text-white" : ""
  }${language === "TypeScript" ? "bg-typescript-bg ring-typescript-ring text-white" : ""}`

  return <span className={`[ ${language} ] ${styles} ring-2 p-2 rounded-md`}>{language}</span>
}

export default LanguagePill
