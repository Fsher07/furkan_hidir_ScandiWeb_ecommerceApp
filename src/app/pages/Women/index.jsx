import React, { Component } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query {
    category {
      products {
        name
        gallery
        category
        id
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

export class All extends Component {
  render() {
    return (
      <div>
        <div className="searchBar-container">
          <input
            placeholder="Enter a category(e.g., tech,clothes)"
            onChange={(e) => this.setState({ input: e.target.value })}
            className="searchBar"
          />
        </div>
        <ul className="product-list">
          {data.category.products
            .filter((product) => {
              if (input === '') {
                return product;
              }
              if (
                product.category.toLowerCase().includes(input.toLowerCase())
              ) {
                return product;
              }
              return '';
            })
            .map((product) => (
              <Product key={product.id} item={product} />
            ))}
        </ul>
      </div>
    );
  }
}

const { loading, data } = useQuery(GET_PRODUCTS);
return <All data={data} loading={loading} />

export default () => {
  const { loading, data } = useQuery(GET_PRODUCTS);
  return <All data={data} loading={loading} />;
};
