import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  const bookInfo = []
  const status = Math.floor(Math.random() * Math.floor(3))
  if (status === 1 || status === 2) {
    for (let j = 0; j < 10; j++) {
      bookInfo.push({
        id: '@increment',
        name: Mock.Random.cword(2, 5),
        startTime: '@datetime',
        endTime: '@datetime'
      })
    }
  }
  List.push(
    Mock.mock({
      id: '@increment',
      name: Mock.Random.cword(2, 5),
      code: Mock.Random.string(24),
      status: status,
      createTime: '@datetime',
      capacity: '@integer(1, 999)',
      bookInfo: bookInfo
    })
  )
}

export default {
  getList: config => {
    const { page = 1, limit = 20 } = param2Obj(config.url)
    console.log('config', config)

    const pageList = List.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: List.length,
      items: pageList
    }
  },
  createRoom: () => {
    return {
      data: 'success'
    }
  },
  deleteRoom: () => {
    return {
      data: 'success'
    }
  },
  updateRoom: () => {
    return {
      data: 'success'
    }
  }
}
