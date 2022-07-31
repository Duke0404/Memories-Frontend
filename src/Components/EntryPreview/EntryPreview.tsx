//Interfaces
import { Link } from 'react-router-dom'
import { dataFormat } from '../../Data/data'

interface EntryPreviewProps extends Omit<dataFormat, "content"> {
    key: number
}

const EntryPreview = (props: EntryPreviewProps): JSX.Element => {
    const dateMix: string = props.dateTimeID.toString()

    return (
        <Link to={"/entry/" + props.dateTimeID}>
            <div>
                <div>
                    <h2>{props.title}</h2>
                    {props.footnotes && <p>{props.footnotes}</p>}
                </div>

                <span>{dateMix.slice(6, 8) + "-" + dateMix.slice(4, 6) + "-" + dateMix.slice(0, 4)+ " " + dateMix.slice(8, 10) + ":" +      dateMix.slice(10, 12)}</span>
            </div>
        </Link>
    )
}

export default EntryPreview