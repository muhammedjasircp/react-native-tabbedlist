import React, {
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from 'react';
import {
  type SectionListData,
  type StyleProp,
  type ViewStyle,
  SectionList,
  FlatList,
} from 'react-native';

export interface TListProps {
  data: any[];
  listHeader?: React.ReactElement | null;
  tabsContainerStyle?: StyleProp<ViewStyle>;
  initialId?: number | string;
  renderTabItem: ({
    index,
    isSelected,
    item,
  }: {
    index: number;
    isSelected: boolean;
    item: any;
  }) => React.ReactNode;
  renderSectionHeader: (section: SectionListData<any>) => React.ReactNode;
  renderListItem: (item: any) => JSX.Element;
  listContainerStyle?: StyleProp<ViewStyle>;
}

export type HorizontalListProps = {
  data: any[];
  onSelect: (id: string) => void;
  renderTabItem: ({
    index,
    isSelected,
    item,
  }: {
    index: number;
    isSelected: boolean;
    item: any;
  }) => React.ReactNode;
  horizontalRef: RefObject<FlatList<any>> | undefined;
  selected: number | string | null;
  setHorizontalPressed: Dispatch<SetStateAction<boolean>>;
  outerListRef: RefObject<SectionList<any>>;
  tabsContainerStyle?: StyleProp<ViewStyle>;
};
