import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/jquery.fancybox.min.css";
import "../../assets/css/owl.css";
import "../../assets/css/swiper.min.css";
import "../../assets/css/woocommerce-layout.css";
import "../../assets/css/woocommerce.css";
import "../../assets/css/scss/elements/theme-css.css";
//import "../assets/css/scss/elements/theme-cssc8d8.css";
import "../../assets/css/scss/elements/theme-css.css";
import Realreview from "./real-review";
import Establishedfact from "./established-fact";
import RelationshipsandResults from "./Relationships-and-Results";
import OurSatisfiedCustomers from "./Our-Satisfied-Customers";
import LookingforQuality from "./Looking-for-Quality";
import DreamBigandMake from "./Dream-Big-and-Make";
const realreviewsfromrealpeople = () => {
  return (
    <>
      <div className="pd_top_70" />
      <Realreview />
      <Establishedfact />
      <RelationshipsandResults />
      <OurSatisfiedCustomers />
      <LookingforQuality />
      <DreamBigandMake />
    </>
  );
};

export default realreviewsfromrealpeople;
