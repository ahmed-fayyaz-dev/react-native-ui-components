import React, { type ReactNode } from 'react';
import {
  FlatList,
  StyleSheet,
  type FlatListProps,
  type FlexStyle,
} from 'react-native';

interface VirtualizedListContainerProps<ItemT>
  extends Omit<FlatListProps<ItemT>, 'data' | 'renderItem'> {
  children: ReactNode;
  style?: FlexStyle;
}

const style = StyleSheet.create({
  container: { flex: 1 },
});

function VirtualizedScrollContainer<ItemT>({
  children,
  style: styleOverride,
  ...props
}: VirtualizedListContainerProps<ItemT>) {
  return (
    <FlatList
      style={[style.container, styleOverride]}
      data={[]}
      keyExtractor={() => 'key'}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
      {...props}
    />
  );
}

export default VirtualizedScrollContainer;
