"use client"

import { useState } from "react"
import "./skeleton.css" 

export function useSkeleton({ isLoading = false, duration = 1500 } = {}) {
  const [loading, setLoading] = useState(isLoading)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)
  const simulateLoading = (time = duration) => {
    setLoading(true)
    setTimeout(() => setLoading(false), time)
  }
  const Skeleton = ({
    className = "",
    width,
    height,
    rounded = "rounded",
    animate = true,
    theme = {},
    style = {},
  }) => {
    const {
      bgColor = undefined,
      borderRadius = undefined,
      animation = true,
    } = theme
  
    const mergedStyle = {
      width: width || "100%",
      height: height || "1rem",
      backgroundColor: bgColor,
      borderRadius: borderRadius,
      ...style,
    }
  
    const classes = [
      "skeleton-base",
      rounded,
      animate && animation ? "skeleton-animate" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")
  
    return <div className={classes} style={mergedStyle} />
  }
  
  
  const TextSkeleton = ({
    lines = 3,
    className = "",
    lastLineWidth = "75%",
  }) => {
    return (
      <div className={`skeleton-text-wrapper ${className}`}>
        {Array.from({ length: lines - 1 }).map((_, i) => (
          <Skeleton key={i} height="0.75rem" />
        ))}
        <Skeleton height="0.75rem" width={lastLineWidth} />
      </div>
    )
  }

  const AvatarSkeleton = ({ size = "3rem", className = "" }) => {
    return (
      <Skeleton
        width={size}
        height={size}
        rounded="skeleton-rounded-full"
        className={className}
      />
    )
  }

  const CardSkeleton = ({ className = "" }) => {
    return (
      <div className={`skeleton-card-wrapper ${className}`}>
        <Skeleton height="12rem" rounded="skeleton-rounded-lg" />
        <TextSkeleton lines={3} />
      </div>
    )
  }

  const TableSkeleton = ({ rows = 5, columns = 4, className = "" }) => {
    const columnSpan = Math.floor(12 / columns)

    return (
      <div className={`skeleton-table-wrapper ${className}`}>
        <div className="skeleton-row">
          {Array.from({ length: columns }).map((_, i) => (
            <Skeleton
              key={i}
              height="2rem"
              className={`skeleton-col span-${columnSpan}`}
            />
          ))}
        </div>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="skeleton-row">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Skeleton
                key={colIndex}
                height="1.5rem"
                className={`skeleton-col span-${columnSpan}`}
              />
            ))}
          </div>
        ))}
      </div>
    )
  }

  return {
    loading,
    startLoading,
    stopLoading,
    simulateLoading,
    Skeleton,
    TextSkeleton,
    AvatarSkeleton,
    CardSkeleton,
    TableSkeleton,
  }
}
