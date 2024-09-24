import { memo } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { HorizontalListProps } from './types';

const HorizontalList = ({
  data,
  onSelect,
  renderTabItem,
  horizontalRef,
  selected,
  setHorizontalPressed,
  outerListRef,
  tabsContainerStyle,
}: HorizontalListProps) => {
  const onItemPress = (item: any, index: number) => {
    setHorizontalPressed(true);
    onSelect(item);
    if (outerListRef?.current) {
      outerListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: 0,
        itemIndex: index + 1,
      });
    }
    if (horizontalRef?.current) {
      horizontalRef.current.scrollToIndex({
        animated: true,
        index: index,
        viewPosition: 0.5,
      });
    }
    setTimeout(() => {
      setHorizontalPressed(false);
    }, 300);
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity onPress={() => onItemPress(item, index)}>
        {renderTabItem ? (
          renderTabItem({ index, isSelected: selected === item, item })
        ) : (
          <Text>Tab item missing</Text>
        )}
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item: any, index: number) => item + index;

  return (
    <View style={tabsContainerStyle}>
      <FlatList
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        extraData={selected}
        horizontal
        keyExtractor={keyExtractor}
        ref={horizontalRef}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 12,
  },
});

export default memo(HorizontalList);
