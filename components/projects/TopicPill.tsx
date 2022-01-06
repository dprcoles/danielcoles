import React from "react"

interface TopicPillProps {
  topic: string
}

const TopicPill: React.FC<TopicPillProps> = ({ topic }) => {
  return (
    <span className={`[ ${topic} ] bg-gray-100 dark:bg-gray-800 dark:text-white p-2 rounded-md`}>
      <b>{topic}</b>
    </span>
  )
}

export default TopicPill
