import React from 'react'

export function ActionIcon({ icon, count, highlight, highlightColor, ...otherProps }) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 60,
        cursor: 'pointer',
        color: highlight ? highlightColor : '#222'
      }}
      { ...otherProps }
    >
      <span className={`pr-2 oi oi-${icon}`} />
      {count >= 0 && <span>{count}</span>}
    </span>
  )
}