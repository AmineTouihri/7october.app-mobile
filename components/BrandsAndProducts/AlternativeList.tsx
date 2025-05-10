import React from "react";
import { FlatList } from "react-native";
import ProductCard from "./ProductCard";
import AlternativeCard from "./AlternativeCard";

export default function ProductList({ products }:any) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <AlternativeCard product={item} />}
    />
  );
}
