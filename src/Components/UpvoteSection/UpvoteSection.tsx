//Router Link

//Interfaces
    //Interface for UpvoteSection props
interface UpvoteSectionProps {
    entryURL: string
    setEntryInfo: (newInfo: entryInfoInterface) => void
    upvotes: number
}
    //Import interface for entryInfo
import { entryInfoInterface } from '../../Pages/Entry/Entry'

//Icons
import { GrLike } from 'react-icons/gr'

const upvoteSection = (props: UpvoteSectionProps) => {
    //Function to post a new upvote
    const upvoteEntry = async () => {
        const response: Response = await fetch(
            `/api/entries/${props.entryURL}/add-upvote`,
            { method: "POST" }
        )

        const newInfo: entryInfoInterface = await response.json()

        props.setEntryInfo(newInfo)
    }

    return (
        <div
            className="
                flex
                justify-center
            "
        >
            <div
                className="
                    dark:bg-accent-secondary-3
                    py-2
                    px-1
                    rounded-lg
                "
            >
                <button
                    onClick={() => upvoteEntry()}
                    className="
                        inline
                        px-1.5
                        pb-1.5
                        border-r
                        border-text-1
                        cursor-pointer
                        hover:border-accent-secondary-2
                        hover:border-r-2
                        active:border-accent-secondary-1
                    "
                >
                        Add an upvote <GrLike className="inline mb-0.5" />
                </button>

                <span
                    className="
                        px-1.5
                    "
                >
                    {props.upvotes}
                </span>
            </div>
        </div>
    )
}

export default upvoteSection