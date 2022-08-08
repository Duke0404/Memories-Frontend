//Router link
import { Link } from 'react-router-dom'

//Interfaces
import { dataFormat } from '../../Data/data'

interface EntryPreviewProps extends Omit<dataFormat, "footnotes"> {
    key: number
}

//Icons
import { GrLink } from 'react-icons/gr'

const EntryPreview = (props: EntryPreviewProps): JSX.Element => {
    const dateMix: string = props.dateTimeID.toString()
    const content: string = props.content.split(" ").length < 100 ? props.content : props.content.split(" ").slice(0, 100).join(" ") + " ..."

    return (
        <div
            className="
                py-3
                px-4
                bg-accent-primary-3
                dark:bg-accent-secondary-3
                rounded-lg
            "
        >
            <div>
                <div
                    className='
                        flex
                        flex-row
                        items-center
                        gap-x-10
                    '
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
                                dark:text-accent-secondary-1
                            "
                        >
                            {
                                dateMix.slice(6, 8) + "-" + dateMix.slice(4, 6) + "-" + dateMix.slice(0, 4)+ " " +
                                dateMix.slice(8, 10) + ":" + dateMix.slice(10, 12)
                            }
                        </span>
                    </div>

                    <span
                        className="
                            inline
                            px-1.5
                            pb-1.5
                            border-l
                            border-text-1
                            cursor-pointer
                            hover:border-accent-secondary-2
                            hover:border-l-2
                            active:border-accent-secondary-1
                        "
                    >
                        <Link to={`/entry/${props.dateTimeID}`}>
                            Open <GrLink className="inline mb-0.5" />
                        </Link>
                    </span>
                </div>

                <p>{content}</p>
            </div>
        </div>
    )
}

export default EntryPreview