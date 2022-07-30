//Interfaces
export interface dataFormat {
    dateTimeID: number
    title: string
    content: string
    footnotes?: string
}

const data: dataFormat[] = [
    {
        dateTimeID: 201901011245,
        title: "Title 1",
        content: "Content 1",
        footnotes: "Footnote 1"
    },
    {
        dateTimeID: 202001011246,
        title: "Title 2",
        content: "Content 2",
    },
    {
        dateTimeID: 202201011247,
        title: "Title 3",
        content: "Content 3",
        footnotes: "Footnote 3"
    },
    {
        dateTimeID: 201401011248,
        title: "Title 4",
        content: "Content 4",
    }
]

export default data