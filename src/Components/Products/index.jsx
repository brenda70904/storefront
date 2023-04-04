import { Card } from "@mui/material";
import { connect } from "react-redux";

const Products = ({ products, activeCategory }) => {
  return (
    <>
      {
        activeCategory && products.map((product, idx) => (
          <Card key={`product-${idx}`} sx={{ minWidth: 275 }}>
            {product.name}
          </Card>
        ))
      }
    </>
  )
}

const mapStateToProps = ({ store }) => {
  return {
    products: store.products,
    activeCategory: store.activeCategory,
  }
}
export default connect(mapStateToProps)(Products);