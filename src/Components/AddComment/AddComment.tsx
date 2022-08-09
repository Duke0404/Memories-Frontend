const AddComment = (): JSX.Element => (
    <div
        className="
            flex
            flex-col
            items-end
            p-4
            gap-2
        "
    >
        <input
            type="text"
            className="
                bg-background-1
                border
                rounded-lg
                h-8
                p-2
                border-text-1
                w-full
            "
        />

        <textarea
            className="
                bg-background-1
                border
                rounded-lg
                h-32
                p-2
                border-text-1
                w-full
            "
        />

        <button
            className="
                w-32
                inline
                px-1.5
                pb-1.5
                border-t
                border-text-1
                cursor-pointer
                hover:border-accent-secondary-2
                hover:border-t-2
                active:border-accent-secondary-1
            "
        >
            Add Comment
        </button>
    </div>
)

export default AddComment