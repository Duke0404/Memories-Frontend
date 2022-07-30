//Interfaces
interface EntryProps {
    match?: any
}

import { dataFormat } from '../../Data/data'

interface dataFormatWithDate extends dataFormat {
    date: string
    time: string
}

//Data
import payload from '../../Data/data'

const Entry = (props: EntryProps): JSX.Element => {
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

    const entryURL = props.match.params.entryURL
    const entryIndex: number = data.findIndex(
        (entry: dataFormatWithDate): boolean => entry.dateTimeID === entryURL
    )

    let entrySelected: dataFormatWithDate

    if(entryIndex !== -1) {
        entrySelected= data[entryIndex]
        return (
            <>
                <h1>{entrySelected.title}</h1>
                <span>{entrySelected.date} {entrySelected.time}</span>
                <p>{entrySelected.content}</p>
                { "footnotes" in entrySelected && <p>{entrySelected.footnotes}</p> }
            </>
        )
    }

    else {
        return (
            <>
                <h1>Entry not found</h1>
                <p>The entry you are looking for does not exist.</p>
            </>
        )
    }
}

export default Entry