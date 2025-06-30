import Journey from "@/components/Journey";
import Partner from "@/components/Partner";
import CommunicateProduct from "@/components/products/CommunicateProduct";
import HeroProducts from "@/components/products/HeroProducts";
import Solutions from "@/components/SolutionsHome";

const ProductPages = () => {
  return (
    <section className=" relative overflow-hidden">
      <HeroProducts />
      <Partner/>
      <CommunicateProduct/>
      <div className="bg-gray-100 py-20">
        <Journey />
      </div>
      <Solutions />
    </section>
  );
};

export default ProductPages;
