import Mock from 'mockjs'

import file from './file'

const mocks = [
  ...file
]

// mock请求方法放在这里统一处理
for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}