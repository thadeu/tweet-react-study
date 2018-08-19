export const shouldFail = id => [2].includes(id)

export const likeTweetRequest = (tweetId, like) => {
  console.log(`HTTP /like_tweet/${tweetId}?like=${like} (begin)`)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSuccess = !shouldFail(tweetId)
      console.log(
        `HTTP /like_tweet/${tweetId}?like${like} (${
          shouldSuccess ? 'success' : 'failure'
        })`
      )

      shouldSuccess ? resolve() : reject()
    }, 1000)
  })
}