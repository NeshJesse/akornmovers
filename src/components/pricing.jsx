import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants/";
const Pricing = () => {
  return (
    <div name="pricing" className="mt-20">
      <h2 className="text-xl sm:text-3xl lg:text-6xl text-center my-4 ">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="sm:w-1/2 lg:w-1/3 p-2">
            <div className="px-4 py-3 w-200 h-100 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-8"> 
                {option.stack}
              </p>
              
              <p className="mb-8">
                <span className="text-5xl mt-4 mr-2">{option.price}</span>
                <span className="w-[14rem] text-neutral-400 tracking-tight"></span>
              </p>
             
                
                
            </div>
            
          </div>
        ))}
        
        
      </div>
      <div className="px-4 py-3 w-200 h-100 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-8"> 
                Additional Costs
              </p>
              
              <ul>
                  <li className="mt-2 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">Shower and chandellier installations</span>
                   
                  </li>

                  <li className="mt-2 flex items-center">
                  <CheckCircle2 />
                    <span className="ml-2">TV Mounting</span>
                  </li>
                  <li className="mt-2 flex items-center">
                  <CheckCircle2 />
                  <span className="ml-2">4th Floor & above</span>
                    
                  </li>
                  <li className="mt-2 flex items-center">
                  <CheckCircle2 />
                  <span className="ml-2">Drilling cutrtain rods</span>
                    
                  </li>
                
              </ul>
                
                
            </div>
    </div>
  );
};

export default Pricing;