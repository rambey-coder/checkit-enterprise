import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPictureListOrder } from "../../../../ToolKit/Features/Order/Service";

const PictureOrderList = () => {
  const { isLoading } = useSelector((state) => state.util);
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(0);

  const [pageSize] = useState(10);

  useEffect(() => {
    dispatch(getPictureListOrder(pageNo, pageSize));
  }, [dispatch, pageNo, pageSize]);
  return <div>PictureOrderList</div>;
};

export default PictureOrderList;
