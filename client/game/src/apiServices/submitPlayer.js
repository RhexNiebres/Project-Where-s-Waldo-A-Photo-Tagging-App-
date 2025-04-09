export const submitPlayerData = async (playerData) => {
    try {
      const response = await fetch('http://localhost:8080/player', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData); 
        throw new Error(`Failed to create player: ${errorData.message || 'Unknown error'}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error); 
      throw error; 
    }
  };
  