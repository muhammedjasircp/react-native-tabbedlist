import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  SectionList,
  Text,
  View,
  type ViewToken,
} from 'react-native';
import type { TListProps } from './types';
import HorizontalList from './horizontalList';

export const TabbedList: React.FC<TListProps> = ({
  data,
  listHeader,
  renderTabItem,
  renderSectionHeader,
  renderListItem,
  listContainerStyle,
  tabsContainerStyle,
}) => {
  const horizontalRef = useRef<FlatList<any>>(null);
  const outerListRef = useRef<SectionList<any>>(null);
  const [horizontalPressed, setHorizontalPressed] = useState(false);
  const [selected, setSelected] = useState<any>();

  const onSelect = (item: any) => {
    setSelected(item);
  };

  useEffect(() => {
    if (data.length) {
      setSelected(data[0]);
    }
  }, [data]);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && !horizontalPressed && selected) {
        const item = viewableItems[0]?.item;
        if (item && item !== selected) {
          setSelected(item);
          if (horizontalRef.current) {
            horizontalRef.current.scrollToItem({
              animated: true,
              item: item,
              viewPosition: 0.5,
            });
          }
        }
      }
    },
    [selected, horizontalPressed]
  );

  const sectionData = [
    {
      title: 'Tabs',
      data: data,
    },
  ];

  const renderProductItem = ({ item }: { item: any }) => {
    return renderListItem ? (
      renderListItem(item)
    ) : (
      <Text>List item required</Text>
    );
  };

  const keyExtractor = (item: any, index: number) => item + index;

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={listContainerStyle}>
        {renderSectionHeader ? (
          renderSectionHeader(item)
        ) : (
          <Text>Section header required</Text>
        )}
        {item.data && (
          <FlatList
            data={item.data}
            keyExtractor={keyExtractor}
            renderItem={renderProductItem}
          />
        )}
      </View>
    );
  };

  const footerStyle = { height: 200 };

  return (
    <SafeAreaView>
      <SectionList
        bounces={false}
        ref={outerListRef}
        sections={sectionData}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={listHeader}
        ListFooterComponent={<View style={footerStyle} />}
        renderSectionHeader={() => (
          <HorizontalList
            data={data}
            onSelect={onSelect}
            renderTabItem={renderTabItem}
            horizontalRef={horizontalRef}
            selected={selected}
            setHorizontalPressed={setHorizontalPressed}
            outerListRef={outerListRef}
            tabsContainerStyle={tabsContainerStyle}
          />
        )}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        nestedScrollEnabled={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          waitForInteraction: true,
          viewAreaCoveragePercentThreshold: 50,
        }}
      />
    </SafeAreaView>
  );
};
