import * as React from "react";
import axios from "axios";
import Card from "../card";
import Button from "../button";
import {useEffect, useState} from "react";
import CONFIG from "../../globals/config";

const Item = () => {
  const [listItem, setListItem] = useState<{item_id: number, item_name: string, stock: number, price: number}[]>([]);
  const [deletedItem, addDeletedItem] = useState(0);

  useEffect(() => {
    axios.get(`${CONFIG.BACKEND_URL}/item/all-item`)
      .then(function (response) {
        setListItem(response?.data);
      })
  },[deletedItem]);

  const deleteItem = (id: number) => {
    axios.delete(`${CONFIG.BACKEND_URL}/item/delete/${id}`)
      .then(function (res) {
        addDeletedItem(deletedItem + 1);
      })
  };

  return (
    <div>
      {listItem?.map((item, index) => (
        <Card key={index}>
          <div>
            <div style={{
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "30px",
              marginBottom: "4px",
            }}>
              {item?.item_name}
            </div>
            <div>
              <span>Stock: {item.stock} | ${item.price}</span>
            </div>
          </div>
          <div style={{display: "flex"}}>
            <a href={`/edit/${item?.item_id}`}>
              <Button text="Edit" background="#275DE9"/>
            </a>
            <Button
              text="Delete"
              background="#E92727"
              usage={() => {deleteItem(item?.item_id)}}
            />
          </div>
        </Card>
      ))}
    </div>
  )
};

export default Item;