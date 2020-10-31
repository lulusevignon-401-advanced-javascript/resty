import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App.js'
import Form from '../components/Form.js'
import Results from '../components/Results.js'


describe.skip('API calls', () => {

  it('should render Star Wars list', async () => {

    const results = [{
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "http://swapi.dev/api/planets/1/",
      "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "http://swapi.dev/api/people/1/"
    }
    ]

    const headers = { 'content-type': 'application/json' };

    render(<Results headers={headers} results={results} count={1} />);

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    expect(screen.getByText('"Luke Skywalker"'));
    expect(screen.getByText('"http://swapi.dev/api/planets/1/"'));

  });
});

describe('Navigation', () => {

  it('loads the home page', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: "Home" }));
    expect(screen.getByRole('document'));
  })

  it('navigates to help page', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: "Help" }));
    expect(screen.getByText('How to use the app?'));
  })


})