// src/components/FlowTree.js
import React, { useState, useEffect } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

const FlowTree = ({ data }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    if (data) {
      const nodes = data.nodes.map((node) => ({
        id: node.id,
        type: node.type,
        data: { label: node.label },
        position: node.position,
      }));

      const edges = data.edges.map((edge) => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        animated: edge.animated,
      }));

      setElements([...nodes, ...edges]);
    }
  }, [data]);

  return (
    <div style={{ height: 500 }}>
      <ReactFlow elements={elements}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowTree;
