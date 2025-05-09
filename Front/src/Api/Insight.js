
import { getBestInfluencer, getBestCountry, getBestCategory, getBestDevice, getBestColor, getBestBrand } from "../Services/Insights";
import { getBestDay, getBestTime } from "../Services/Date";
import days from '../Data/Days';
export const getBestInsights = async () => {
    try {
      const [
        influencer,
        countryCode,
        category,
        device,
        color,
        brand,
        dayIndex,
        time,
      ] = await Promise.all([
        getBestInfluencer(),
        getBestCountry(),
        getBestCategory(),
        getBestDevice(),
        getBestColor(),
        getBestBrand(),
        getBestDay(),
        getBestTime(),
      ]);
  
      const displayNames = new Intl.DisplayNames(['fr'], { type: 'region' });
      const country = displayNames.of(countryCode);
  
      const dayInFrench = days?.[dayIndex] || dayIndex;
  
      return {
        influencer,
        country,
        category,
        device,
        color,
        brand,
        day: dayInFrench,
        time,
      };
    } catch (error) {
      console.error('Failed to fetch insights:', error);
      return {};
    }
  };
  