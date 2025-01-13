import axios from "axios";
import { useEffect, useState } from "react";

export const useMenu = () => {
const [count, setCount] = useState(0);
const [menu, setMenu] = useState([]);
const [loading, setLoading] = useState(true);
const itemPerPage = 6;
const [currentPage, setCurrentPage] = useState(0);

// total page count
const totalPage = Math.ceil(count / itemPerPage);

const pageNumber = [...Array(totalPage).keys()];

// getting data count
useEffect(() => {
axios.get("https://crave-spot-website-server.vercel.app/menuCount").then((res) => {
setCount(res.data.count);
});
}, []);

// get all data
useEffect(() => {
axios
.get(
`https://crave-spot-website-server.vercel.app/menu?page=${currentPage}&limit=${itemPerPage}`
)
.then((res) => {
setMenu(res.data);
setLoading(false);
});
}, [currentPage]);
return [menu, loading, currentPage, setCurrentPage, pageNumber, totalPage];
};
