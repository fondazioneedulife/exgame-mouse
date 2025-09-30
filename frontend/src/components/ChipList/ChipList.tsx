import ChipComponent from "./ChipComponent/ChipComponent";

type Chip = { type: string; testo: string };

type ChipListProps = {
  chips: Chip[];
};

const ChipList = ({ chips }: ChipListProps) => (
  <div className="chips">
    {chips.map((chip, idx) => (
      <ChipComponent key={idx} type={chip.type} testo={chip.testo} />
    ))}
  </div>
);

export default ChipList;