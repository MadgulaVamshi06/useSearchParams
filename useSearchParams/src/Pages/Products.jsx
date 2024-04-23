import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";


async function getData(url) {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
}

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const gender = searchParams.get("_category") || "";
  const orderParam = searchParams.get("order") || "asc";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchAndUpdateData(url) {
    setLoading(true);
    try {
      const apiResponse = await getData(url);
      setData(apiResponse.data);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const apiUrl = gender
      ? `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/?_category=${gender}`
      : `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?sort=price&order=${orderParam}`
    fetchAndUpdateData(apiUrl);
  }, [gender,orderParam]);

  function handleCategory(e) {
    const selectedGender = e.target.value;
    if (selectedGender === "all") {
      setSearchParams({}); // Clear the search parameters
    } else {
      setSearchParams({ _category: selectedGender }); // Set the category parameter
    }
  }

  
  function handleOrderChange(e) {
    const orderParam = e.target.value;
    navigate(`?sort=price&order=${orderParam}`); // 
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center', // This centers the items on the main axis
      alignItems: 'center', // This centers the items on the cross axis
      gap: '20px', // This adds space between the items
      margin: '0 auto'
    }}>
       <h1 style={{ width: '100%', textAlign: 'center' }}>Product Page</h1>
       <br />
       <br />
      <select name="category" onChange={handleCategory} value={gender} style={{ width: '40%', textAlign: 'center' }}>
        <option value="">All</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kid</option>
      </select>
      <br />
       <br />
      <select name="order" onChange={handleOrderChange} value={orderParam} style={{ width: '40%', textAlign: 'center' }}>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <br />
       <br />
      {data.map((item) => (
        <div key={item.id} >
          <img src={item.image} alt={item.title} />
          <h3>Brand: {item.brand}</h3>
          <p>Category: {item.category}</p>
          <p>{item.title}</p>
          <p>Rs.{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;