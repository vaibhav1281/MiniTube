
const commentData = [
  {
    name:"Vaibhav Saroj",
    text: "Thank you for applying for Frontend Developer - React.js - Internship (0-1 yrs) position on hirist.tech.",
    replies: [
      {
        name:  "Another Vaibhav Saroj",
        text:  "This is a reply to the first one",
        replies: []
      },
      {
        name:  "Another Vaibhav Saroj 1",
        text:  "1 This is a reply to the first one",
        replies: [
          {
            name:  "Another Vaibhav Saroj 1",
            text:  "1 This is a reply to the first one",
            replies: [
              {
                name:  "Another Vaibhav Saroj",
                text:  "This is a reply to the first one",
                replies: [
                  {
                    name:  "Another Vaibhav Saroj",
                    text:  "This is a reply to the first one",
                    replies: []
                  },
                  {
                    name:  "Another Vaibhav Saroj 1",
                    text:  "1 This is a reply to the first one",
                    replies: [
                      {
                        name:  "Another Vaibhav Saroj 1",
                        text:  "1 This is a reply to the first one",
                        replies: []
                      }
                    ],
                  }
                ],
              },
              {
                name:  "Another Vaibhav Saroj 1",
                text:  "1 This is a reply to the first one",
                replies: [
                  {
                    name:  "Another Vaibhav Saroj 1",
                    text:  "1 This is a reply to the first one",
                    replies: []
                  }
                ],
              }
            ],
          }
        ],
      }
    ],
  },
  {
    name:"Vaibhav Saroj 1",
    text: "1 Thank you for applying for Frontend Developer - React.js - Internship (0-1 yrs) position on hirist.tech.",
    replies: [],
  },
  {
    name:"Vaibhav Saroj 2",
    text: "2 Thank you for applying for Frontend Developer - React.js - Internship (0-1 yrs) position on hirist.tech.",
    replies: [],
  },
  {
    name:"Vaibhav Saroj 3",
    text: "3 Thank you for applying for Frontend Developer - React.js - Internship (0-1 yrs) position on hirist.tech.",
    replies: [
      {
        name:  "Another Vaibhav Saroj",
        text:  "This is a reply to the first one",
        replies: []
      },
      {
        name:  "Another Vaibhav Saroj 1",
        text:  "1 This is a reply to the first one",
        replies: [
          {
            name:  "Another Vaibhav Saroj 1",
            text:  "1 This is a reply to the first one",
            replies: []
          }
        ],
      }
    ],
  },
]

const Comment = ({data}) => {
  const{name,text,replies} = data;
  return(
    <div className="w-4/5 bg-gray-200 rounded-md m-2">
      <div className="p-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

const CommentsList = ({comments}) => {
  return(
    <div className="w-full">
      {
        comments.map(comment => {
          return(
            <div className="" key={comment.id}>
              <Comment data={comment} />
              <div className="pl-5 border-l-2 border-black">
                <CommentsList comments={comment.replies}/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className="text-2xl font-semibold">Comments :</h1>
      <CommentsList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer