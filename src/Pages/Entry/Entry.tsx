//Router Parameters
import { useParams } from 'react-router-dom'

//Interfaces
import { dataFormat } from '../../Data/data'

export interface dataFormatWithDate extends dataFormat {
    date: string
    time: string
}

//Data
import payload from '../../Data/data'

//Pages
import NotFound from '../NotFound/NotFound'

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

    if(entryURL === undefined || data.findIndex((entry: dataFormatWithDate): boolean => entry.dateTimeID === +entryURL) === -1)
        return <NotFound />

    const entryIndex: number = data.findIndex(
        (entry: dataFormatWithDate): boolean => entry.dateTimeID === +entryURL
    )
    const entrySelected: dataFormatWithDate = data[entryIndex]

    return (
        <>
            <h1>{entrySelected.title}</h1>
            <span>{entrySelected.date} {entrySelected.time}</span>
            <p>{entrySelected.content}</p>
            { "footnotes" in entrySelected && <p>{entrySelected.footnotes}</p> }
        </>
    )
}

export default Entry