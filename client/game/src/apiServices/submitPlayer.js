export const submitPlayerData = async (playerData) => {
  try {
    const response = await fetch(import.meta.env.VITE_HOST + "/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { success: false, error: data.message || "Failed to create player." };
    }

    return { success: true, player: data.player };

  } catch (error) {
    return { success: false, error: error.message || "An unexpected error occurred." };
  }
};
