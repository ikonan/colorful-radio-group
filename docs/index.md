---

hero:
  title: '@iiko/colorful-radio-group'
  desciption: 一个自定义样式的 RadioGroup 组件

---


```tsx

/**
 * defaultShowCode: true
 * title: '基本用法'
 * description: 每个选项可以配置不同的颜色
 */
import React from 'react'
import { ColorfulRadioGroup} from '@iiko/colorful-radio-group'
export default () => <div>

<ColorfulRadioGroup
  defaultValue="1"
  options={[
    { label: '选项1', value: '1', color: '#52C41A' },
    { label: '选项2', value: '2', color: '#F53F3F' },
    { label: '选项3', value: '3', color: 'orange' },
  ]}
/>
</div>
```
