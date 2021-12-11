import { useEffect, useState } from 'react';
import { getOrdersForUser } from '../services/firebase';
import { displayMoney } from '../utils/helpers';

function Orders({ currentUser }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrdersForUser(currentUser.userId);
      setOrders(data.docs.map(doc => ({ orderId: doc.id, ...doc.data() })));
    };
    if (currentUser !== null) {
      fetchOrders();
    }
  }, [currentUser]);

  if (!currentUser) return 'Loading...';

  return (
    <div className="container mx-auto px-4">
      {orders &&
        orders.map(order => (
          <div className="bg-white border shadow px-4 my-8 py-4 mb-12">
            <div className="grid grid-flow-col auto-cols-max gap-8 border-b pb-4">
              <div>
                <h3 className="text-gray-500 block mb-1">Број на нарачка</h3>
                <h5 className="text-xs text-black font-bold">
                  {order.orderId}
                </h5>
              </div>

              <div>
                <h3 className="text-gray-500 block mb-1">Датум на нарачка</h3>
                <h5 className="text-xs text-black font-bold">
                  {new Date(order.createdAt).toLocaleDateString()}
                </h5>
              </div>

              <div>
                <h3 className="text-gray-500 block mb-1">Вкупна цена</h3>
                <h5 className="text-xs text-black font-bold">
                  {displayMoney(order.totalPrice)}
                </h5>
              </div>
            </div>

            <div className="mt-5 mb-2 flex items-center gap-4">
              {order.orderItems.map(item => (
                <div className="flex items-center mb-6 group">
                  <div className="w-20 h-20">
                    <img
                      src={`/assets/images/products/${item.name.replaceAll(
                        ' ',
                        ''
                      )}/image-1.png`}
                      alt="product"
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-2 mr-auto">
                    <h1 className="font-medium">{item.name}</h1>

                    <div className="flex items-center">
                      <p className="mr-2 font-bold text-xl">{item.price}</p>
                      <span className="text-gray-500 text-md">
                        x {item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Orders;
