import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3030';

export const getBestInfluencer = async () => {
    try {
      const response = await axios.get(`${apiUrl}/insight/bestInfluencer`);
      return response.data.firstName;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const getBestCountry = async () => {
    try {
      const response = await axios.get(`${apiUrl}/insight/getBestCountry`);
      return response.data.mostUsedCountry;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const getBestCategory = async () => {
    try {
      const response = await axios.get(`${apiUrl}/insight/getBestCategory`);
      return response.data.categoryText;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export const getBestDevice = async () => {
    try {
      const response = await axios.get(`${apiUrl}/insight/getBestDevice`);
      return response.data.bestDevice;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export const getBestColor = async () => {
    try {
      const response = await axios.get(`${apiUrl}/insight/getBestColor`);
      return response.data.colorText;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const getBestBrand = async () => {
    try {
      const response = await axios.get(`${apiUrl}/insight/getBestBrand`);
      return response.data.mostUsedBrand;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
