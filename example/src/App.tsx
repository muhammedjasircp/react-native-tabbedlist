import { StyleSheet, Text, View } from 'react-native';
import { TabbedList } from 'react-native-tabbedlist';

export default function App() {
  const DATA = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Orange', 'Grapes'],
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Broccoli', 'Spinach', 'Potato'],
    },
    {
      title: 'Meats',
      data: ['Chicken', 'Beef', 'Pork', 'Lamb'],
    },
    {
      title: 'Dairy',
      data: ['Milk', 'Cheese', 'Yogurt', 'Butter'],
    },
  ];

  const renderListItem = (item: any) => {
    return (
      <View style={styles.listItem}>
        <Text>Hello {item}</Text>
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
      <View style={[styles.tabItem, isSelected && styles.selected]}>
        <Text>Tab {item.title}</Text>
      </View>
    );
  };
  const renderSectionHeader = (item: any) => {
    return (
      <View style={styles.header}>
        <Text>section {item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TabbedList
        data={DATA}
        renderListItem={renderListItem}
        renderTabItem={renderTabItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: { height: 100 },
  tabItem: {
    width: 200,
    height: 100,
    backgroundColor: 'red',
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: 'yellow',
  },
  selected: {
    backgroundColor: 'green',
  },
});
