import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ActivityIndicator } from "react-native";
import CategoryList from "@/components/Categories/CategoryList";
import AlternativeList from "@/components/BrandsAndProducts/AlternativeList";
import { fetchAlternativeProducts } from "../../api/product";
import { fetchCategories } from "../../api/category";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";
import BoycottInfoBottomPopup from "@/components/popup/BoycottInfoBottomPopup";
import CameraButton from "@/components/CameraButton";

export default function Alternatives() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetchAlternativeProducts(),
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
        <AlternativeList products={filteredProducts} />
      </View>
            <CameraButton />
      
    </SafeAreaView>
  );
}
