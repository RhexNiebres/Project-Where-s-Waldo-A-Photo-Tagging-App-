export const fetchPlayers = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_HOST + "/player"); 
  
      if (!response.ok) {
        throw new Error("Failed to fetch players.");
      }
  
      const data = await response.json();
  
      if (data.success) {
        return { success: true, players: data.players };
      } else {
        throw new Error("Failed to retrieve player data.");
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  