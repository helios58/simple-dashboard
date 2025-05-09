import axios from 'axios';


export const getBestDay = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3030/date/getBestDay`);
      return response.data.bestDay;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const getBestTime = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3030/date/getBestTime`);
      return response.data.bestTime;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };