import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "This is a first product - amazing!",
    quantity: 1,
    price: 6,
  },
  {
    id: 2,
    title: "Another Item - a second one.",
    quantity: 1,
    price: 4,
  },
];

const Products = (props) => {
  const products = DUMMY_PRODUCTS.map((p) => (
    <ProductItem key={p.id} item={p} />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
