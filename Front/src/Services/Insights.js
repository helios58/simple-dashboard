import axios from 'axios';
export const getBestInfluencer = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/insight/bestInfluencer`);
      return response.data.firstName;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const getBestCountry = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/insight/getBestCountry`);
      return response.data.mostUsedCountry;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const getBestCategory = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/insight/getBestCategory`);
      return response.data.categoryText;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export const getBestDevice = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/insight/getBestDevice`);
      return response.data.bestDevice;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export const getBestColor = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/insight/getBestColor`);
      return response.data.colorText;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  export const getBestBrand = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/insight/getBestBrand`);
      return response.data.mostUsedBrand;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
