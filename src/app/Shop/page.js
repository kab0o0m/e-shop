"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../components/ProductCard";
import LayoutBar from "../components/LayoutBar";
import { FilterBar } from "../components/FilterBar";

export default function Shop() {
  const [allProducts, setAllProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState("none");
  const [fromValue, setFromValue] = useState("0");
  const [toValue, setToValue] = useState("999999");

  const handlePriceRange = () => {
    console.log(Number(fromValue), Number(toValue));
  };
  const handleChangeFilter = (filterState) => {
    setSort(filterState);
  };
  const handleCategorySend = (data) => {
    console.log(data);
    setCategory(data);
  };
  const initialUser =
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  const [user, setUser] = useState({});
  useEffect(() => {
    // Check if the user is logged in
    if (initialUser) {
      setUser(initialUser); // Set the user state
    }
  }, []);

  const products = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/product");
      setAllProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const sortedProducts = (sort) => {
    if (sort === "a-z") {
      return allProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "z-a") {
      return allProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === "low-high") {
      return allProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (sort === "high-low") {
      return allProducts.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    } else {
      return allProducts;
    }
  };

  useEffect(() => {
    products();
  }, []);

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  console.log(allProducts);

  return (
    <>
      {!isLoading && (
        <div>
          <div>
            <div className="w-full h-48 bg-slate-100 px-64 py-10 flex flex-col">
              <h1 className="text-[48px] font-thin">Shop</h1>
              <div className="flex flex-row space-x-2 font-light">
                <h1 className="font-semibold">Shop </h1>
                <h1 className="font-semibold"> / </h1>
                <h1>Shop</h1>
              </div>
            </div>
            <LayoutBar
              noOfItems={allProducts.length}
              onFilterChange={handleChangeFilter}
            />
          </div>
          <div className="flex flex-row px-64 justify-between">
            <FilterBar
              sendCategory={handleCategorySend}
              fromValue={fromValue}
              toValue={toValue}
              setFromValue={setFromValue}
              setToValue={setToValue}
              handlePriceRange={handlePriceRange}
              className="w-1/3"
            />
            <div className="grid gap-4 grid-cols-3 mt-3 w-2/3 max-2xl:grid-cols-2">
              {category === "none"
                ? sortedProducts(sort)
                    .filter((item) => {
                      console.log(item.price);
                      return (
                        item.price <=
                          Number(toValue === "" ? 99999 : toValue) &&
                        item.price >= Number(fromValue)
                      );
                    })
                    .map((product, index) => (
                      <ProductCard
                        key={index}
                        title={product.name}
                        category={product.category_id}
                        price={product.price.toFixed(2)}
                        imgsrc={product.imageLink}
                      />
                    ))
                : sortedProducts(sort)
                    .filter((item) => {
                      return (
                        item.categoryId === category &&
                        Number(toValue === "" ? 99999 : toValue) &&
                        item.price >= Number(fromValue)
                      );
                    })
                    .map((product, index) => (
                      <ProductCard
                        key={index}
                        title={product.name}
                        category={product.category_id}
                        price={product.price.toFixed(2)}
                        imgsrc={product.imageLink}
                      />
                    ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
