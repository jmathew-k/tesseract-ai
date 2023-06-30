import Item from "./Item";

const items = [
    {
        id: "0",
        number: 1,
        incorrect: "Arbitrum One",
        correct: "Optimistic Rollup",
    },
    {
        id: "1",
        number: 2,
        incorrect: "OP Mainnet",
        correct: "Optimistic Rollup",
    },
    {
        id: "2",
        number: 3,
        incorrect: "zkSync Era",
        correct: "ZK Rollup",
    },
    {
        id: "3",
        number: 4,
        incorrect: "dYdX",
        correct: "ZK Rollup",
    },
    {
        id: "4",
        number: 5,
        incorrect: "Immutable X",
        correct: "Validium",
    },
];

type AssessmentProps = {};

const Assessment = ({}: AssessmentProps) => (
    <div className="py-3">
        <div className="table w-full">
            <div className="table-row caption1 text-n-4 md:flex">
                <div className="table-cell pl-5 py-2 md:hidden">#</div>
                <div className="table-cell pl-5 py-2 md:w-1/2 md:pr-2">
                    Name (5)
                </div>
                <div className="table-cell pl-5 py-2 md:w-1/2 md:pl-0 md:pr-5">
                    Technology
                </div>
                <div className="table-cell pl-5 pr-5 py-2 text-center md:hidden">
                    TVL
                </div>
            </div>
            {items.map((x) => (
                <Item item={x} key={x.id} />
            ))}
        </div>
    </div>
);

export default Assessment;
