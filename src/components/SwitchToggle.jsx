import React from "react";

/**
 * SwitchToggle config options:
 * - switchWidth: px (default 90)
 * - switchHeight: px (default 28)
 * - colorA: gradient start (default 'from-green-500')
 * - colorB: gradient end (default 'to-blue-200')
 * - ballColor: bg class (default 'bg-white')
 * - ballSize: px (default 28)
 * - labelOffset: px (default 10)
 * - ballOffset: px (default 0)
 * - trueLabelAlign: 'left' | 'right' (default 'left')
 * - falseLabelAlign: 'right' | 'left' (default 'right')
 * - gradientStopsTrue: custom CSS gradient for true (optional)
 * - gradientStopsFalse: custom CSS gradient for false (optional)
 */

const SwitchToggle = ({
  value,
  onChange,
  trueLabel,
  falseLabel,
  colorA = "from-green-500",
  colorB = "to-blue-200",
  ballColor = "bg-white",
  switchWidth = 90,
  switchHeight = 28,
  ballSize = 28,
  labelOffset = 10,
  ballOffset = 0,
  trueLabelAlign = "left",
  falseLabelAlign = "right",
  gradientStopsTrue,
  gradientStopsFalse,
  className = "",
}) => (
  <label
    className={`relative inline-block select-none ${className}`}
    style={{ width: switchWidth, height: switchHeight, minWidth: switchWidth }}
  >
    <input
      type="checkbox"
      checked={value}
      onChange={(e) => {
        e.stopPropagation();
        onChange(!value);
      }}
      className="opacity-0 w-0 h-0"
    />
    {/* Background gradient */}
    <span
      className={`absolute inset-0 rounded-full transition-colors duration-200 pointer-events-none z-0`}
      style={
        value
          ? gradientStopsTrue
            ? { backgroundImage: gradientStopsTrue }
            : undefined
          : gradientStopsFalse
          ? { backgroundImage: gradientStopsFalse }
          : undefined
      }
      // fallback Tailwind classes if no custom gradient
      {...(!gradientStopsTrue && value
        ? {
            className: `absolute inset-0 rounded-full transition-colors duration-200 pointer-events-none z-0 bg-gradient-to-r ${colorA} ${colorB}`,
          }
        : !gradientStopsFalse && !value
        ? {
            className: `absolute inset-0 rounded-full transition-colors duration-200 pointer-events-none z-0 bg-gradient-to-r ${colorB} ${colorA}`,
          }
        : {})}
    />
    {/* Ball and label, absolutely positioned with anchor variables */}
    {value ? (
      <>
        {/* Label left or right, ball on opposite */}
        <span
          className={`absolute top-1/2 text-xs font-semibold text-white z-10 pointer-events-none select-none`}
          style={{
            [trueLabelAlign]: labelOffset,
            transform: "translateY(-50%)",
          }}
        >
          {trueLabel}
        </span>
        <span
          className={`absolute top-1/2 ${ballColor} rounded-full shadow-md border border-gray-200 z-10 transition-transform duration-200`}
          style={{
            [trueLabelAlign === "left" ? "right" : "left"]: ballOffset,
            width: ballSize,
            height: ballSize,
            transform: "translateY(-50%)",
          }}
        />
      </>
    ) : (
      <>
        {/* Label left or right, ball on opposite */}
        <span
          className={`absolute top-1/2 text-xs font-semibold text-white z-10 pointer-events-none select-none`}
          style={{
            [falseLabelAlign]: labelOffset,
            transform: "translateY(-50%)",
          }}
        >
          {falseLabel}
        </span>
        <span
          className={`absolute top-1/2 ${ballColor} rounded-full shadow-md border border-gray-200 z-10 transition-transform duration-200`}
          style={{
            [falseLabelAlign === "right" ? "left" : "right"]: ballOffset,
            width: ballSize,
            height: ballSize,
            transform: "translateY(-50%)",
          }}
        />
      </>
    )}
  </label>
);

export default SwitchToggle;
