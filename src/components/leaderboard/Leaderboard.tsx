import { useState, useEffect, useCallback } from "react";
import type { ListChildComponentProps } from "react-window";
import { FixedSizeList as List } from "react-window";
import useUsers from "@/hooks";
import { LeaderboardItem, Loader } from "@/components";

const Leaderboard = () => {
  const { users, loadMore, loading } = useUsers();
  const [selected, setSelected] = useState<number | null>(null);

  const rankWidth = `${String(users.length).length * 12 + 10}px`;

  // Адаптивная высота списка
  const [listHeight, setListHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setListHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Row = useCallback(
    ({ index, style }: ListChildComponentProps) => {
      const user = users[index];
      if (!user) return null;

      return (
        <div style={style}>
          <LeaderboardItem
            user={user}
            index={index}
            selected={selected === index}
            rankWidth={parseInt(rankWidth)}
            onClick={() => setSelected(index)}
          />
        </div>
      );
    },
    [users, selected, rankWidth],
  );

  return (
    <div className="leaderboard">
      <List
        height={listHeight}
        itemCount={users.length}
        itemSize={72}
        width="100%"
        onItemsRendered={({ visibleStopIndex }) => {
          if (visibleStopIndex >= users.length - 5 && !loading) {
            loadMore();
          }
        }}
      >
        {Row}
      </List>

      {loading && <Loader />}
    </div>
  );
};

export default Leaderboard;
