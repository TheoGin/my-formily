type Props = {
  value: string
  options?: string[]
  onChange?: (value: string) => void
}

export function Select({ value, options, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">请选择</option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
