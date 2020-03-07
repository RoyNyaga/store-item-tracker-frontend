const ITEM_LIST = 'ITEM_LIST'
const ITEM = 'ITEM'

const listItem = (items) => ({
  type: ITEM_LIST,
  items
})

const item = (item) => ({
  type: ITEM,
  item
})

export { ITEM_LIST, ITEM, listItem }
