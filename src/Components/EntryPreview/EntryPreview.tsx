//Interfaces
import { Link } from 'react-router-dom'
import { dataFormat } from '../../Data/data'

interface EntryPreviewProps extends Omit<dataFormat, "footnotes"> {
    key: number
}

const EntryPreview = (props: EntryPreviewProps): JSX.Element => {
    const dateMix: string = props.dateTimeID.toString()
    const content: string = props.content.split(" ").length < 100 ? props.content : props.content.split(" ").slice(0, 100).join(" ") + " ..."

    return (
        <div
            className="
                py-3
                px-4
                bg-accent-primary-3
                rounded-lg
            "
        >
            <div>
                <h2
                    className="
                        text-2xl
                        font-semibold
                    "
                >
                    {props.title}
                </h2>

                <span
                    className="
                        italic
                        font-semibold
                        text-accent-primary-4
                    "
                >
                    {
                        dateMix.slice(6, 8) + "-" + dateMix.slice(4, 6) + "-" + dateMix.slice(0, 4)+ " " +
                        dateMix.slice(8, 10) + ":" + dateMix.slice(10, 12)
                    }
                </span>

                <p>{content}</p>
            </div>
        </div>
    )
}

export default EntryPreview