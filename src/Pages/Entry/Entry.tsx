//React Stuff
    //Import useState & useEffect
import { useState, useEffect } from 'react';

//Router Parameters
import { useParams } from 'react-router-dom'

//Interfaces
import { dataFormat } from '../../Data/data'

export interface dataFormatWithDate extends dataFormat {
    date: string
    time: string
}

    //Interface for  entryInfo
export interface entryInfoInterface {
    upvotes: number
    comments: {username: string, comment: string}[]
}

// Data
import payload from '../../Data/data'

// Pages
import NotFound from '../NotFound/NotFound'

// Components
    // Import CommentsList
import CommentsList from '../../Components/CommentsList/CommentsList'
    // Import UpvoteSection
import UpvoteSection from '../../Components/UpvoteSection/UpvoteSection'

const Entry = (): JSX.Element => {
    const data: dataFormatWithDate[] = payload.map(
        (entry: dataFormat): dataFormatWithDate => {
            const dateMix: string = entry.dateTimeID.toString()

            return {
                ...entry,
                date: dateMix.slice(6, 8) + "-" + dateMix.slice(4, 6) + "-" + dateMix.slice(0, 4),
                time: dateMix.slice(8, 10) + ":" + dateMix.slice(10, 12)
            }
        }
    )

    const { entryURL } = useParams()

    if(!entryURL || data.findIndex((entry: dataFormatWithDate): boolean => entry.dateTimeID === +entryURL) === -1)
        return <NotFound />

    const entryIndex: number = data.findIndex(
        (entry: dataFormatWithDate): boolean => entry.dateTimeID === +entryURL
    )
    const entrySelected: dataFormatWithDate = data[entryIndex]

    // entryInfo default value
    const entryInfoDefault: entryInfoInterface = {
        upvotes: 0,
        comments: [],
    }

    //States
        //State to hold entry upvotes & comments
    const [entryInfo, setEntryInfo] = useState(entryInfoDefault)

    //Effects
        //Effect to load entry info
    useEffect(
        (): void => {
            const fetchInfo = async (): Promise<void> => {
                const response: Response = await fetch(`/api/entries/${entryURL}`)
                const newInfo: entryInfoInterface = await response.json()

                setEntryInfo(newInfo)
            }

            fetchInfo()
        },
        [entryURL]
    )

    return (
        <>
            <h2
                className="
                    text-2xl
                    font-semibold
                "
            >
                {entrySelected.title}
            </h2>

            <span
                className="
                    italic
                    font-semibold
                    text-accent-primary-4
                    dark:text-accent-secondary-1
                "
            >
                {entrySelected.date} {entrySelected.time}
            </span>

            <p>{entrySelected.content}</p>

            {
                "footnotes" in entrySelected &&
                <p
                    className="
                    mt-2
                    pt-2
                    border-t
                    border-text-1
                "
                >
                    {entrySelected.footnotes}
                </p>
            }

            <UpvoteSection
                entryURL={entryURL}
                setEntryInfo={setEntryInfo}
                upvotes={entryInfo.upvotes}
            />

            <CommentsList
                comments={entryInfo.comments}
            />
        </>
    )
}

export default Entry