export default function ProgressBar({ value = 0, showLabel = false }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
      <div className="progress" style={{ flex:1 }}>
        <div className="progress-fill" style={{ width:`${value}%` }} />
      </div>
      {showLabel && (
        <span style={{ fontSize:11, color:'var(--text-secondary)', minWidth:28 }}>{value}%</span>
      )}
    </div>
  );
}
