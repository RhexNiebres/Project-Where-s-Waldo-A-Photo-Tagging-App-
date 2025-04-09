export const fetchPlayers = async () => {
    try {
      const response = await fetch("http://localhost:8080/player"); 
  
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
  