# react-native-tabbedlist

React Native Scrollable Tabbed List.

<img src="https://github.com/user-attachments/assets/8d36aee1-96d2-4ec7-af42-a8723555aba1" width="300"/>


## Installation

```sh
npm install react-native-tabbedlist
```

## Usage

```js
import { TabbedList } from 'react-native-tabbedlist';

// ...

 const DATA: Data[] = [
    {
      title: 'Section 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Section 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    }
 ]

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

  const renderSectionHeader = (section: SectionListData<Data>) => {
    return (
      <View style={styles.sectionHeader}>
        <Text>{section.title}</Text>
      </View>
    );
  };

  const listHeader = (
    <View style={styles.header}>
      <Text>List Header</Text>
    </View>
  );



return (
    <TabbedList
        data={DATA}
        listHeader={listHeader}
        renderListItem={renderListItem}
        renderTabItem={renderTabItem}
        renderSectionHeader={renderSectionHeader}
    />;
)
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
