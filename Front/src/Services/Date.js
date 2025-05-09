import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL || '${apiUrl}';


export const getBestDay = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/date/getBestDay`);
      return response.data.bestDay;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const getBestTime = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/date/getBestTime`);
      return response.data.bestTime;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };