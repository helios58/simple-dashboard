import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3030';
export const getCardData = async (id, startTimestamp = null, endTimestamp = null) => {
  try {
    const response = await axios.get(`${apiUrl}/data/cardData/${id}`, {
      params: {
        startTimestamp,
        endTimestamp,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const getSaleScore = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/data/saleScore/${id}`);
      return response.data.score;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  

  