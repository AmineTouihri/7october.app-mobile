import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ActivityIndicator, Text } from "react-native";
import CategoryList from "@/components/Categories/CategoryList";
import ProductList from "@/components/BrandsAndProducts/ProductList";
import { fetchProducts } from "../../api/product";
import { fetchCategories } from "../../api/category";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";
import CameraButton from "@/components/CameraButton";
import BoycottInfoBottomPopup from "@/components/popup/BoycottInfoBottomPopup";

export default function Boycott() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        setProducts(prodRes);
        setCategories([{ _id: "0", name: "الكل" }, ...catRes]);
      } catch (err) {
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredProducts =
    selectedCategory === "0"
      ? products
      : products.filter((p) => p.categories.includes(selectedCategory));

  if (loading) return <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#c70000" />;

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <CategoryList
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <BoycottInfoBottomPopup/>
      <View style={{ flex: 1, marginTop: 10 }}>
        <ProductList products={filteredProducts} />
      </View>
      <CameraButton />
    </SafeAreaView>
  );
}
