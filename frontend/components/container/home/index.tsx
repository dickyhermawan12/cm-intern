import Head from "next/head";
import Link from "next/link";
import Button from "../../elements/button";
import Item from "../../elements/item";
import * as React from "react";

const Home = () => {
  return(
    <div>
      <Head>
        <title>Welcome to Mini App</title>
        <meta name="description" content="A simple app for final project"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div style={{
          margin: "4rem 0 2rem 0",
          textAlign: "center",
          fontWeight: "600",
          fontSize: "40px"
        }}>
          Welcome to Mini App
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center"
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
              <div style={{
                fontSize: "20px",
                fontWeight: "600",
              }}>
                Your Items
              </div>
              <Link href="/add">
                <Button text="Add Item" background="#191919"/>
              </Link>
            </div>
            <Item/>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Home;