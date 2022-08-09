//Interfaces
    //Interface for comments data
interface commentsInterface {
    username: string
    comment: string
}

const CommentsList = ({ comments }: {comments: commentsInterface[]}): JSX.Element => (
    <div
        className="
            flex
            flex-col
            gap-4
        "
    >
        <h3
            className="
                text-xl
                font-semibold
            "
        >
            Comments
        </h3>

        {
            comments.map(
                (comment: commentsInterface, key: number): JSX.Element => (
                    <div
                        className="
                            py-3
                            px-4
                            bg-accent-primary-3
                            dark:bg-accent-secondary-3
                            rounded-lg
                        "
                        key={key}
                    >
                        <h4
                            className="
                                text-lg
                                font-semibold
                            "
                        >
                            {comment.username}
                        </h4>
                        <p>{comment.comment}</p>
                    </div>
                )
            )
        }
    </div>
)

export default CommentsList