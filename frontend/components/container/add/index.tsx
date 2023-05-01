import Head from "next/head";
import Link from "next/link";
import Button, {SubmitButton} from "../../elements/button";
import * as React from "react";
import {useState} from "react";
import axios from "axios";
import CONFIG from "../../globals/config";

const Add = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemStock, setItemStock] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      "item_name" : itemName,
      "price" : itemPrice,
      "stock" : itemStock,
    };

    axios.post(`${CONFIG.BACKEND_URL}/item/create`, payload)
      .then(function (res) {
        window.location.href = '/';
      })

  };

  return (
    <div>
      <Head>
        <title>Add Item</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div style={{
          margin: "4rem 0 2rem 0",
          textAlign: "center",
          fontWeight: "600",
          fontSize: "40px"
        }}>
          Add New Item
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "500"
        }}>
          <div style={{
            width: "80%",
            maxWidth: "1200px"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}>
            </div>
            <form
              onSubmit={e => {handleSubmit(e)}}
              style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '100%',
                marginBottom: '1.5rem'
              }}>
                <label htmlFor="item-name">
                  Item Name:
                </label><br/>
                <input
                  required={true}
                  onChange={(e) => {setItemName(e.target.value)}}
                  id="item-name"
                  name="item-name"
                  type="text"
                  placeholder="My Item"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    marginTop: '0.5rem',
                    fontSize: "20px",
                  }}
                />
              </div>
              <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <div style={{width: '45%'}}>
                  <label htmlFor="item-price">
                    Price:
                  </label><br/>
                  <input
                    required={true}
                    onChange={(e) => {setItemPrice(Number(e.target.value))}}
                    name="item-price"
                    type="number"
                    placeholder="$0"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      marginTop: '0.5rem',
                      fontSize: "20px",
                    }}
                  />
                </div>
                <div style={{width: '45%'}}>
                  <label htmlFor="item-stock">
                    Stock:
                  </label><br/>
                  <input
                    required={true}
                    onChange={(e) => {setItemStock(Number(e.target.value))}}
                    name="item-stock"
                    type="number"
                    placeholder="10"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      marginTop: '0.5rem',
                      fontSize: "20px",
                    }}
                  />
                </div>
              </div>
              <div style={{
                display: "flex",
                marginTop: "2.5rem",
                justifyContent: "flex-end",
                width: "100%"
              }}>
                  <SubmitButton text="Create"/>
                <Link href="/">
                  <Button text="Cancel" background="#E92727"/>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Add;