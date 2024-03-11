import { TiTick } from "react-icons/ti";
import { HiMiniXMark } from "react-icons/hi2";
function Card(data) {
  return (
    <div className="col">
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal text-center text-muted">{data.scheme}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title text-center">
            ${data.price}<small>/month</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            {
                data.features.map((feature,index)=>
                {
                    return feature.enabled ? 
                    <li key={index}><TiTick /> {feature.name}</li>
                    :<li className="text-muted" key={index}><HiMiniXMark />{feature.name}</li>
                })
            }
          </ul>
          <button
            type="button"
            class="btn btn-lg btn-primary w-100"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
