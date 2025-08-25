import { useParams } from "react-router-dom";
import { getStores } from "../hooks/useStore";
import { getProductById } from "../hooks/useProduct";

import Text from "../base-components/text";

export default function PageProduct() {
	const { id } = useParams<{ id: string }>();
   const product = getProductById(id)

	return (
		<div className="flex flex-col gap-y-15">

         <div>
            <Text className="text-[40px] font-zilla-slab">{product?.name}</Text>
         </div>

			<div className="flex flex-row gap-x-4">
				<div className="
				flex w-70 h-70
				bg-blue-extralight 
				rounded-md">
					<img
						className="flex object-contain self-stretch max-w-1/1 max-h-1/1"
						src={product?.imageUrl}
						alt={product?.name}
					/>
            </div>

            <div className="flex flex-col w-120 justify-between">
               <div className="flex flex-row space-x-3 justify-between">
                  <div><Text variant="zilla-lg">R$ {product?.price}</Text></div>
                  <div><Text variant="zilla-lg">Estoque: {product?.stock}</Text></div>
               </div>

               <div className="flex w-70">
                  {product?.description}
               </div>
            </div>
         </div>
		</div>
	);
}