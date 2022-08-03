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
        <div
            className="
                flex
                flex-col
                gap-4
                py-4
            "
        >
            {
                payload.map(
                    (entry: dataFormat): JSX.Element => (
                        <EntryPreview
                            key={entry.dateTimeID}
                            title={entry.title}
                            dateTimeID={entry.dateTimeID}
                            content={entry.content}
                        />
                    )
                )
            }
        </div>
    )
}

export default EntriesList