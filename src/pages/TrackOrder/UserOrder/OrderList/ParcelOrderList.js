import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getParcelListOrder } from "../../../../ToolKit/Features/Order/Service";

const ParcelOrderList = () => {
    const { isLoading } = useSelector((state) => state.util);
    const dispatch = useDispatch();
    const [pageNo, setPageNo] = useState(0);

    const [pageSize] = useState(10);

    useEffect(() => {
      dispatch(getParcelListOrder(pageNo, pageSize));
    }, [dispatch, pageNo, pageSize]);
  return <div>ParcelOrderList</div>;
};

export default ParcelOrderList;
