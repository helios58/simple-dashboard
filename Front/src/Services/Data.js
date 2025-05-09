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
    console.error('Error fetching data:', error);
  }
};
export const getSaleScore = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3030/data/saleScore/${id}`);
      return response.data.score;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  

  