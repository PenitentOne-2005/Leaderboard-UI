import type { User } from "../../types";

export interface Props {
  user: User;
  index: number;
  selected: boolean;
  onClick: () => void;
  rankWidth: number;
}
