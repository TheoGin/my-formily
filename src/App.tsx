import { useState } from 'react'
import { Input } from './components/Input'
import { Select } from './components/Select'

function App() {
  const [username, setUsername] = useState('')
  const [type, setType] = useState('')

  return (
    <form className="mx-auto mt-10 max-w-md rounded-lg border bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">用户信息表单</h2>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          用户名
        </label>
        <Input value={username} onChange={setUsername} />
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          用户类型
        </label>
        <Select value={type} options={['个人', '企业']} onChange={setType} />
      </div>

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={(event) => {
          event.preventDefault()
          console.log({ username, type })
        }}
      >
        提交
      </button>
    </form>
  )
}

export default App
