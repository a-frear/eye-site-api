function makeCommentsArray() {
    return [
        {
            id: 1,
            modified: '2021-01-16T15:41:12.239Z',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
            video_id: 1,
            user_id: 1
          },
          {
            id: 2,
            modified: '2021-01-16T15:41:12.239Z',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
            video_id: 3,
            user_id: 2
          },
          {
            id: 3,
            modified: '2021-01-16T15:41:12.239Z',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
            video_id: 2,
            user_id: 3
        },
          {
            id: 4,
            modified: '2021-01-16T15:41:12.239Z',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
            video_id: 1,
            user_id: 1
        },
          {
            id: 5,
            modified: '2021-01-16T15:41:12.239Z',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
            video_id: 2,
            user_id: 2
        },
    ]
}

function makeMaliciousComment() {
    const maliciousComment = {
        id: 911,
        modified: new Date().toISOString(),
        content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
        video_id: 2,
        user_id: 1
       
    }
      const expectedComment = {
        ...maliciousComment,
        content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
      }
      return {
        maliciousComment,
        expectedComment,
      }
}

module.exports = { makeCommentsArray, makeMaliciousComment }