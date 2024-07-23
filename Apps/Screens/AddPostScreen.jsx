import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

export default function AddPostScreen() {
  const db = getFirestore(app);
  const [CategoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  /**
   * used to get Category List
   */

  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "category"));
    querySnapshot.forEach((doc) => {
      console.log("Docs:", doc.data());
      setCategoryList((CategoryList) => [...CategoryList, doc.data]);
    });
  };
  return (
    <View>
      <Text>AddPostScreen</Text>
    </View>
  );
}
