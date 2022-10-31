export type photoType = {
  height: number;
  isRawPhoto: boolean;
  metadata: any;
  path: string;
  width: number;
  separators: any;
};

export type flatListDataType = {
  item: any;
  index: number;
};

export type actionType = {
  onPress: () => void;
  icon: JSX.Element;
  label?: string;
};
