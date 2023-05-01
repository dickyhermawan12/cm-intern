import * as React from "react";
import {useRouter} from "next/router";
import Edit from "../../components/container/edit";

const EditItem = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Edit itemId={id}/>
    </div>
  )
};

export default EditItem;