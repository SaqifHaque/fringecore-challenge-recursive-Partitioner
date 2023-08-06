import { useState } from "react";
import { Partition } from "./Partition";

const getRandomColor = () => {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
};

function App() {
  const [partitions, setPartitions] = useState([{ color: getRandomColor() }]);
  
  const handleSplit = (index, direction) => {
  const newPartitions = [...partitions];
  const newColor = getRandomColor();

  if (direction === 'v') {
    newPartitions.splice(index, 1, { color: partitions[index].color }, { color: newColor });
  } else if (direction === 'h') {
    if (partitions[index].children) {
      partitions[index].children.push({ color: newColor });
    } else {
      newPartitions.splice(index, 1, { color: partitions[index].color, children: [{ color: newColor }] });
    }
  }
  console.log(newPartitions, "new");
  setPartitions(newPartitions);
};

  const handleRemove = (index) => {
    const newPartitions = [...partitions];
    newPartitions.splice(index, 1);
    setPartitions(newPartitions);
  };

  return (
    <div className="flex h-screen">
      {partitions.map((partition, index) => (
        <Partition
          key={index}
          partition={partition}
          onSplitV={() => handleSplit(index, 'v')}
          onSplitH={() => handleSplit(index, 'h')}
          onRemove={() => handleRemove(index)}
        />
      ))}
    </div>
  );
}

export default App;
