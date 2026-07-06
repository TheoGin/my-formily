export type FieldSchema = {
  name: string
  label: string
  component: 'Input' | 'Select'
  options?: string[]
  initialValue?: unknown
}

export const schema: FieldSchema[] = [
  {
    name: 'username',
    label: '用户名',
    component: 'Input',
  },
  {
    name: 'type',
    label: '用户类型',
    component: 'Select',
    options: ['个人', '企业'],
  },
  {
    name: 'companyName',
    label: '企业名称',
    component: 'Input',
  },
  {
    name: 'taxId',
    label: '税号',
    component: 'Input',
  },
  {
    name: 'contactType',
    label: '联系方式',
    component: 'Select',
    options: ['手机号', '邮箱'],
  },
  {
    name: 'contact',
    label: '联系方式',
    component: 'Input',
  },
]
