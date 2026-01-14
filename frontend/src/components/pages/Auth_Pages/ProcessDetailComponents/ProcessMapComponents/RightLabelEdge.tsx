import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
} from '@xyflow/react';


export function RightLabelEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: any) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  
  const freq = data?.frequency ?? 0;
  const prob01 = data?.probability ?? 0;
  const avgMins = data?.average_transition_time_mins ?? 0;

  const probPct = `${(prob01 * 100).toFixed(1)}%`;
  const avgText = `${avgMins.toFixed(1)} min`;

  return (
    <>
      <BaseEdge path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX + 200}px, ${labelY}px)`,
            padding: '4px 8px',
            borderRadius: 6,
            fontSize: 12,
            border: '1px solid #060a12',
            color: '#374151',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <div><b>Freq</b>: {freq.toLocaleString()}</div>
          <div><b>Prob</b>: {probPct}</div>
          <div><b>Avg</b>: {avgText}</div>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
