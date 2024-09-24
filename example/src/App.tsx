import { StyleSheet, Text, View } from 'react-native';
import { TabbedList } from 'react-native-tabbedlist';

export default function App() {
  const DATA = [
    {
      title: 'Section 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Section 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Section 3',
      data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
    },
    {
      title: 'Section 4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
    },
    {
      title: 'Section 5',
      data: ['Item 5-1', 'Item 5-2', 'Item 5-3'],
    },
    {
      title: 'Section 6',
      data: ['Item 6-1', 'Item 6-2', 'Item 6-3'],
    },
    {
      title: 'Section 7',
      data: ['Item 7-1', 'Item 7-2', 'Item 7-3'],
    },
    {
      title: 'Section 8',
      data: ['Item 8-1', 'Item 8-2', 'Item 8-3'],
    },
    {
      title: 'Section 9',
      data: ['Item 9-1', 'Item 9-2', 'Item 9-3'],
    },
    {
      title: 'Section 10',
      data: ['Item 10-1', 'Item 10-2', 'Item 10-3'],
    },
  ];

  const renderListItem = (item: any) => {
    return (
      <View style={styles.listItem}>
        <Text>{item}</Text>
      </View>
    );
  };
  const renderTabItem = ({
    item,
    isSelected,
  }: {
    item: any;
    isSelected: boolean;
  }) => {
    return (
      <View style={styles.tabItem}>
        <Text style={isSelected && styles.selected}>{item.title}</Text>
      </View>
    );
  };
  const renderSectionHeader = (item: any) => {
    return (
      <View style={styles.sectionHeader}>
        <Text>{item.title}</Text>
      </View>
    );
  };
  const listHeader = (
    <View style={styles.header}>
      <Text>List Header</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TabbedList
        data={DATA}
        listHeader={listHeader}
        renderListItem={renderListItem}
        renderTabItem={renderTabItem}
        renderSectionHeader={renderSectionHeader}
        tabsContainerStyle={styles.tabsContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeee',
    borderRadius: 12,
    margin: 2,
  },
  tabItem: {
    width: 120,
    paddingVertical: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    width: '100%',
    paddingVertical: 24,
    paddingStart: 12,
    backgroundColor: '#fff',
  },
  header: {
    height: 150,
    backgroundColor: '#eed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    color: 'green',
    fontWeight: 'bold',
  },
  tabsContainer: { borderBottomWidth: 0.5, borderColor: 'green' },
});
