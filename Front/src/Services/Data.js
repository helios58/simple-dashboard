import axios from 'axios';


export const getCardData = async (id, startTimestamp = null, endTimestamp = null) => {
  try {
    const response = await axios.get(`http://localhost:3030/data/cardData/${id}`, {
      params: {
        startTimestamp,
        endTimestamp,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching card data:', error);
  }
};
export const getSaleScore = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3030/data/saleScore/${id}`);
      return response.data.score;
    } catch (error) {
      console.error('Error fetching amount:', error);
    }
  };
  export const getBestInfluencer = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/data/bestInfluencer`);
      return response.data.firstName;
    } catch (error) {
      console.error('Error fetching amount:', error);
    }
  };

  export const getBestCountry = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/data/getBestCountry`);
      return response.data.mostUsedCountry;
    } catch (error) {
      console.error('Error fetching amount:', error);
    }
  };

  export const getBestCategory = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/data/getBestCategory`);
      return response.data.categoryText;
    } catch (error) {
      console.error('Error fetching amount:', error);
    }
  };

  

  