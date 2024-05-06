
import SearchBar from "../Components/SearchBar";

// JSON data for orders with plastic details and transaction type
const ordersData = [
  {
    id: 12345,
    date: "April 15, 2024",
    totalAmount: 100,
    plasticName: "PET Bottles",
    transactionType: "Bought",
  },
  {
    id: 12346,
    date: "April 16, 2024",
    totalAmount: 150,
    plasticName: "HDPE Containers",
    transactionType: "Sold",
  },
  {
    id: 12347,
    date: "April 17, 2024",
    totalAmount: 200,
    plasticName: "LDPE Bags",
    transactionType: "Bought",
  },
  {
    id: 12348,
    date: "April 18, 2024",
    totalAmount: 250,
    plasticName: "PP Containers",
    transactionType: "Sold",
  },
  {
    id: 12349,
    date: "April 19, 2024",
    totalAmount: 300,
    plasticName: "PS Foam",
    transactionType: "Bought",
  },
  {
    id: 12345,
    date: "April 15, 2024",
    totalAmount: 100,
    plasticName: "PET Bottles",
    transactionType: "Bought",
  },
  {
    id: 12345,
    date: "April 15, 2024",
    totalAmount: 100,
    plasticName: "PET Bottles",
    transactionType: "Sold",
  },
  {
    id: 12345,
    date: "April 15, 2024",
    totalAmount: 100,
    plasticName: "PET Bottles",
    transactionType: "Sold",
  },
  {
    id: 12345,
    date: "April 15, 2024",
    totalAmount: 100,
    plasticName: "PET Bottles",
    transactionType: "Bought",
  },
];

const MyOrders = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <SearchBar />

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8">
        {/* <h1 className="text-2xl font-semibold mb-4">My Orders</h1> */}

        {/* Orders List */}
        <div className="bg-white p-6 rounded-md shadow-md">
          {/* Map through ordersData array to display each order */}
          {ordersData.length ? (
            ordersData.map((order) => (
              <div key={order.id} className="border-b pb-4 mb-4 flex justify-between items-center">
                {/* Left Side - Order Details */}
                <div>
                  <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
                  <p className="text-gray-600">Total Amount: ${order.totalAmount}</p>
                  <p className="text-gray-600">Plastic Name: {order.plasticName}</p>
                </div>

                {/* Right Side - Date and Transaction Type */}
                <div className="text-right">
                  <p className="text-gray-600">Order Date: {order.date}</p>
                  <p className={`text-gray-600 ${order.transactionType === "Bought" ? "text-green-500" : "text-red-500"}`}>Transaction Type: {order.transactionType}</p>
                </div>
              </div>
            ))
          ) : (
            // <div className="text-center text-gray-500">
            //   You haven't placed any orders yet.
            // </div>
            []
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
