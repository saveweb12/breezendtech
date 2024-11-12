
import DigitalMarketingServices from "../digitalmarketingservices/DigitalMarketingServices";
import ViewAll from "./ViewAll"
import HealthyFoodRecipes from "./HealthyFoodRecipes"
const page = () => {
  return (
    <>
     <DigitalMarketingServices />
     <ViewAll/>
     <HealthyFoodRecipes/>
    </>
  )
}

export default page