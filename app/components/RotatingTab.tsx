"use client";

interface RotatingTabProps {
  title: string;
  className?: string;
}

export default function RotatingTab({
  title,
  className = "",
}: RotatingTabProps) {
  return (
    <div className={`flow-border ${className}`}>
      {title}
    </div>
  );
}