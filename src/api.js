const getUnreadEmailCount = (username) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(username.toLowerCase() === 'lisa' ? 8 : 2370)
    }, 400)
  })
}

export { getUnreadEmailCount }
