// import Recommended from "./pages/Recommended/Recommended.jsx";
import { useState } from "react";
import HomePage from "./pages/home/HomePage.jsx";
import Navbar from "./pages/navbar/Navbar.jsx"

import products from './data/data.jsx'; // importing the all products
import Card from "./components/Card.jsx";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null) // common state for radio and recommend buttons.


  // let manage the state of search input 

  //  -------------- search input filter ------------//
  const [inputQuery, setInputQuery] = useState(" "); // State to hold the search query

  // Function to update the search query state when the input changes
  const handleSearchInputChange = (e) => {
    setInputQuery(e.target.value)
  }

  // Filter the products based on the search query
  /* 
    //---- simple and readable way
    const filteredItems = products && products.filter((product) => product.title.toLowerCase().includes(inputQuery.toLowerCase()))
  */
  //----  or   both returns the same boolean value ----------
  //----explicit way 
  const filteredItems = products && products.filter((product) => product.title.toLowerCase().indexOf(inputQuery.toLowerCase()) !== -1)


  //------------- Radio filter ----------------//

  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value)
  }



  // -------------- Buttons Filters ------------------
  const handleButtonClick = (e) => {
    setSelectedCategory(e.target.value)
  }




  // main filtering function
  function filteredData(products, selected, inputQuery) {
    let filteredProducts = products;

    // if we found any match product by searching  then we set it into "filteredProducts" variable
    if (inputQuery) {
      filteredProducts = filteredItems;
    }

    //selected  filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, prevPrice, title }) =>
        category === selected || color === selected || company === selected || newPrice === selected || prevPrice === selected || title === selected
      )

    }
    return filteredProducts.map(({ id, img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={id}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}

      />
    ))
  }

  // calling the function 
  const result = filteredData(products, selectedCategory,
    inputQuery,
  )
  // console.log(result);

  return (
    <>
      <Navbar
        query={inputQuery}
        handleInputChange={handleSearchInputChange}
      />
      <HomePage
        handleChange={handleRadioChange} // passing as props to child components
        handleClick={handleButtonClick}
        result={result}
      />

    </>
  )
}

export default App;

// herrachy prop passing basically know as prop drilling.
// App ---> HomePage --> Sidebar --> Category , Price and Color