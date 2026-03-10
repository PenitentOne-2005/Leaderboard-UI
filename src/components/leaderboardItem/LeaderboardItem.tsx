import { formatTime } from "@/utils";
import type { Props } from "./interface";

const LeaderboardItem = ({
  user,
  index,
  selected,
  onClick,
  rankWidth,
}: Props) => {
  return (
    <div className={`row ${selected ? "active" : ""}`} onClick={onClick}>
      <div className="rank-avatar">
        <div className="rank" style={{ width: rankWidth }}>
          {index + 1}
        </div>
        <div className="avatar" />
      </div>

      <div className="info">
        <div className="name">{user.name}</div>
        <span className="time">{formatTime(user.time)}</span>{" "}
        <span className="speed">| {user.speed} км/ч</span>
      </div>
    </div>
  );
};

export default LeaderboardItem;
