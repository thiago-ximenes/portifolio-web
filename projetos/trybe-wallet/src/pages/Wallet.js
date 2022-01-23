import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div className="h-screen w-screen flex bg-gray-200">
        <div
          className="max-w-fit w-full bg-green-300 m-auto rounded
        p-8 h-auto max-h-full text-gray-700"
        >
          <Header />
          <Form />
          <Table />
        </div>
      </div>
    );
  }
}

export default Wallet;
