import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@increment',
      name: Mock.Random.cword(2, 5),
      startTime: '@datetime',
      endTime: '@datetime'
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
  createBook: () => {
    return {
      data: 'success'
    }
  },
  deleteBook: () => {
    return {
      data: 'success'
    }
  },
  updateBook: () => {
    return {
      data: 'success'
    }
  }
}
