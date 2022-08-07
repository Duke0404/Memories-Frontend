//Interfaces
    //Interface for comments data
interface commentsInterface {
    username: string
    comment: string
}

const CommentsList = ({ comments }: {comments: commentsInterface[]}): JSX.Element => (
    <>
        <h3>Comments</h3>

        {
            comments.map(
                (comment: commentsInterface, key: number): JSX.Element => (
                    <div className="comment" key={key}>
                        <h4>comment.username</h4>
                        <p>comment.text</p>
                    </div>
                )
            )
        }
    </>
)

export default CommentsList