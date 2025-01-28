/* const handleSave = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProfileData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setIsEditing(false);
      } else {
        setError(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      setError("Failed to save profile changes.");
    }
  }; 
  
  const handleEdit = () => {
    setIsEditing(true);
    setNewProfileData(profile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProfileData({
      ...newProfileData,
      [e.target.name]: e.target.value,
    });
  };
  */