//React Stuff
    //Import useState
import { ChangeEvent, useState } from 'react'

//Interfaces
    //Interace for comments
export interface commentInterface {
    username: string
    comment: string
}

    //Import entryInfoInterface
import { entryInfoInterface } from '../../Pages/Entry/Entry'

    //Interface for entryInfoProps
interface entryInfoProps {
    entryURL: string
    setEntryInfo: (entryInfo: entryInfoInterface) => void
}


const AddComment = (props: entryInfoProps): JSX.Element => {
    //States
    const [username, setUsername] = useState<string>("")
    const [commentText, setCommentText] = useState<string>("")

    //Function to post comment data
    const postComment = async (): Promise<void> => {
        const response: Response = await fetch(
            `/api/entries/${props.entryURL}/add-comment`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        username,
                        comment: commentText
                    }
                )
            }
        )

        const newInfo: entryInfoInterface = await response.json()

        props.setEntryInfo(newInfo)
    }

    return (
        <div
            className="
                flex
                flex-col
                items-end
                p-4
                gap-2
            "
        >
            <label
                className="
                    w-full
                    flex
                    flex-col
                    gap-1
                "
            >
                <span>User Name:</span>

                <input
                    type="text"
                    className="
                        bg-background-1
                        dark:bg-background-1-dark
                        border
                        rounded-lg
                        h-8
                        p-2
                        border-text-1
                        dark:border-text-1-dark
                        w-full
                    "
                    value={username}
                    onChange={(event: ChangeEvent<HTMLInputElement>): void => {setUsername(event.target.value)}}
                />
            </label>

            <label
                className="
                    w-full
                    flex
                    flex-col
                    gap-1
                "
            >
                <span>Comment:</span>

                <textarea
                    className="
                        bg-background-1
                        dark:bg-background-1-dark
                        border
                        rounded-lg
                        h-32
                        p-2
                        border-text-1
                        dark:border-text-1-dark
                        w-full
                    "
                    value={commentText}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {setCommentText(event.target.value)}}
                />
            </label>

            <button
                className="
                    w-32
                    inline
                    px-1.5
                    pb-1.5
                    border-t
                    border-text-1
                    cursor-pointer
                    hover:border-accent-secondary-2
                    hover:border-t-2
                    active:border-accent-secondary-1
                "
                onClick={() => postComment()}
            >
                Add Comment
            </button>
        </div>
    )
}

export default AddComment