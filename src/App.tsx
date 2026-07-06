import { useState } from 'react'
import { componentMap } from './componentMap'
import { schema } from './schema'

function App() {
  const [values, setValues] = useState<Record<string, unknown>>(() => {
    const init: Record<string, unknown> = {}

    schema.forEach((item) => {
      init[item.name] = item.initialValue ?? ''
    })

    return init
  })

  return (
    <form className="mx-auto mt-10 max-w-md rounded-lg border bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">用户信息表单</h2>

      {schema.map((fieldSchema) => {
        const Component = componentMap[fieldSchema.component]

        return (
          <div key={fieldSchema.name} className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              {fieldSchema.label}
            </label>
            <Component
              value={String(values[fieldSchema.name] ?? '')}
              options={fieldSchema.options}
              onChange={(value: string) =>
                setValues((prev) => ({ ...prev, [fieldSchema.name]: value }))
              }
            />
          </div>
        )
      })}

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={(event) => {
          event.preventDefault()
          console.log(values)
        }}
      >
        提交
      </button>

      <pre className="mt-6 text-left">{JSON.stringify(values, null, 2)}</pre>
    </form>
  )
}

export default App
