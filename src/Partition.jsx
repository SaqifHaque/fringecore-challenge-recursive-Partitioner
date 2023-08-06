import React from 'react';

export const Partition = ({ partition, onSplitV, onSplitH, onRemove }) => {
    const { color, children } = partition;
  
    return (
      <div className="flex-1 flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: color }}>
        {children ? (
          children.map((child, index) => (
            <Partition
              key={index}
              partition={child}
              onSplitV={onSplitV}
              onSplitH={onSplitH}
              onRemove={onRemove}
            />
          ))
        ) : (
            <div className="flex items-center justify-center h-full">
                <button className="btn" onClick={onSplitV}>v</button>
                <button className="btn" onClick={onSplitH}>h</button>
                <button className="btn" onClick={onRemove}>-</button>
          </div>
        )}
      </div>
    );
  };