export default function Avatar({ initials, colorClass = 'av-blue', size = 'md' }) {
  return (
    <div className={`avatar avatar-${size} ${colorClass}`}>
      {initials}
    </div>
  );
}
