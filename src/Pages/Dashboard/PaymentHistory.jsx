import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../Hooks/useAuth";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { Title } from "../../Components/Title";
import moment from "moment";

export const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymentHistory/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);
  // const formattedDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  return (
    <div>
      <Title title={"PAYMENT HISTORY"} para={"---At a Glance!---"}></Title>
      <div className="p-12 bg-white w-11/12 lg:w-9/12 mx-auto">
        <h2 className="text-3xl font-semibold">
          Total Payments: {payments.length}
        </h2>
        <div className="overflow-x-auto mt-6 bg-white">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white h-16">
              <tr className="">
                <th>No</th>
                <th>EMAIL</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
                <th>Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item, idx) => (
                <tr key={idx} className="">
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>{item.email}</td>
                  <td>$ {item.price}</td>
                  <td>{moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}</td>
                  <td>{item.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
