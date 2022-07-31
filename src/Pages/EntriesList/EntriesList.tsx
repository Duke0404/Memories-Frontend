//Router Links
import { Link } from 'react-router-dom'

//Data
import payload from '../../Data/data'

//Components
import EntryPreview from '../../Components/EntryPreview/EntryPreview'

//Interfaces
import { dataFormat } from '../../Data/data'

const EntriesList = (): JSX.Element => {

    return (
        <>
            {
                payload.map(
                    (entry: dataFormat): JSX.Element => (
                        <EntryPreview
                            key={entry.dateTimeID}
                            title={entry.title}
                            dateTimeID={entry.dateTimeID}
                            footnotes={entry.footnotes}
                        />
                    )
                )
            }
        </>
    )
}

export default EntriesList