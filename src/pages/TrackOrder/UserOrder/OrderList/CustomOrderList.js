import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../../components/Loader/Loader";
import { getCustomListOrder } from "../../../../ToolKit/Features/Order/Service";

const CustomOrderList = () => {
  const { isLoading } = useSelector((state) => state.util);
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(0);

  const [pageSize] = useState(10);

  useEffect(() => {
    dispatch(getCustomListOrder(pageNo, pageSize));
  }, [dispatch, pageNo, pageSize]);

  return <div></div>;
};

export default CustomOrderList;
