//Interfaces
    //Interface for UpvoteSection props
interface UpvoteSectionProps {
    entryURL: string
    setEntryInfo: (newInfo: entryInfoInterface) => void
    upvotes: number
}
    //Import interface for entryInfo
import { entryInfoInterface } from '../../Pages/Entry/Entry'

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
        <div>
            <button
                onClick={() => upvoteEntry()}
            >Add Upvote</button>

            <span>{props.upvotes}</span>
        </div>
    )
}

export default upvoteSection