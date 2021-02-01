function makeCommentsArray() {
  return [
    {
      id: 1,
      modified: "2021-01-16T15:41:12.239Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
      video_id: 1,
      user_name: "harry_potter",
    },
    {
      id: 2,
      modified: "2021-01-16T15:41:12.239Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
      video_id: 3,
      user_name: "ron_weasley",
    },
    {
      id: 3,
      modified: "2021-01-16T15:41:12.239Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
      video_id: 2,
      user_name: "adumbledore",
    },
    {
      id: 4,
      modified: "2021-01-16T15:41:12.239Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
      video_id: 1,
      user_name: "harry_potter",
    },
    {
      id: 5,
      modified: "2021-01-16T15:41:12.239Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
      video_id: 2,
      user_name: "hermione_g",
    },
  ];
}

function makeMaliciousComment() {
  const maliciousComment = {
    id: 911,
    modified: new Date().toISOString(),
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    video_id: 2,
    user_name: "tom_riddle",
  };
  const expectedComment = {
    ...maliciousComment,
    content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
  };
  return {
    maliciousComment,
    expectedComment,
  };
}

const authToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkdiTGYyQkNFZ29LLUhVOHkyMTBwRyJ9.eyJpc3MiOiJodHRwczovL2Rldi1sdWtuNXVnMi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjAxODQzNWY5ZGJkMWEwMDY4ZjBjMDQ0IiwiYXVkIjpbImh0dHBzOi8vZXhwcmVzcy5leWUtc2l0ZSIsImh0dHBzOi8vZGV2LWx1a241dWcyLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2MTIyMDM0MzMsImV4cCI6MTYxMjI4OTgzMywiYXpwIjoiaE1MOEVuOUYzS3dDTmpLQVlUYnFwajJNVFJCU1laOEsiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.unwZfBHeDLD97rLmpMcRdCATWzw_5NcB2lyR2y2YMhaz5Mj0cr9kd5RzHxs0fS6H-eMf10R8dIMyHTuoNxpC7riHhdH8d8VpWcU-F7LYbP2zFwDzpbI8voUNBQC4_qe-xrywfZuyJXDWpB1vtzL8tDR074-TVcxAmZpLvz9Z0jAI3mbkKLBXZ8zJe38zM7zR9yCDlmu55FwujMHNdmVVeRlWCU2inGctX_koZBlkTKAzmXhOUcHwEyiT-RR37Ee59TIUx-d1Z_-S68E49ekck11NJLvcrk-Ix1pxnm3f7lh5Bh3AgNh_iFbNYmvOOq54Nhz1CpjPTvN_Z3RJxSTotg'

module.exports = { makeCommentsArray, makeMaliciousComment, authToken };
