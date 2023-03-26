import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLinkListOrder } from "../../../../ToolKit/Features/Order/Service";

const LinkOrderList = () => {
  const { isLoading } = useSelector((state) => state.util);
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(0);

  const [pageSize] = useState(10);

   useEffect(() => {
     dispatch(getLinkListOrder(pageNo, pageSize));
   }, [dispatch, pageNo, pageSize]);
  return (
    <div>LinkOrderList</div>
  )
}

export default LinkOrderList