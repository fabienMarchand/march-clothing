import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { CategoryItem } from "../../store/categories/category.types";

import ProductCard from "../product-card/product-card-component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CatgoryPreview: FC<CategoryPreviewProps> = memo(({
  title,
  products,
}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
      <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
      </CategoryPreviewContainer>
  );
});

export default CatgoryPreview;
