import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function DonorDashboard() {
  return (
    <div className="container">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to{" "}
          <Link href="/posts/first">
            <a>Daana.</a>
          </Link>
        </h1>

        <p className="description">
          World is so glad to have <span className={"donor"}>great humans</span>{" "}
          like <span className={"receiver"}>you</span>!
        </p>


        <div className="grid">
          <a href="/donor/Donate" className="cardReceiver">
            <h3>Make New Donation &rarr;</h3>
            <ul>
              <li>
                <p>Make Donation to an organisation from the list displayed.</p>
              </li>
            </ul>
          </a>

          <a href="/donor/DonorHistory" className="cardDonor">
            <h3>History &rarr;</h3>
            <ul>
              <li>
                <p>View history of donations.</p>
              </li>
              <li>
                <p>Track the usage of your contribution.</p>
              </li>
            </ul>
          </a>
        </div>
      </main>

      <footer>
        <a>
          <img src="/logo-daana.png" alt="Daana Logo" className="logo" />- a
          project for{" "}
          <img
            src="/hackthechain.png"
            alt="Hack the Chain Logo"
            className="logo"
          />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 7rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #f36900;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1000px;
          margin-top: 3rem;
        }

        .cardReceiver {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .cardDonor {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .cardDonor:hover,
        .cardDonor:focus,
        .cardDonor:active {
          color: #29f300;
          border-color: #29f300;
        }

        .cardReceiver:hover,
        .cardReceiver:focus,
        .cardReceiver:active {
          color: #9600f3;
          border-color: #9600f3;
        }

        .cardReceiver h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .cardReceiver p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .cardDonor h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .cardDonor p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .donor:hover,
        .donor:focus,
        .donor:active {
          color: #29f300;
          border-color: #29f300;
        }

        .receiver:hover,
        .receiver:focus,
        .receiver:active {
          color: #9600f3;
          border-color: #9600f3;
        }

        .logo {
          height: 2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
