const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

export async function getUserCSVFiles() {
  const token = localStorage.getItem("@auth_token");

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/csv_datasource/files`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed to fetch files");
    }

    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error("Error fetching CSV files:", err);
    throw err;
  }
}

export async function uploadCSV(csvFiles: File[]) {
  const results = [];
  const token = localStorage.getItem('@auth_token');

  for (const file of csvFiles) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      console.log(`Uploading file: ${file.name} (${file.size} bytes)`);
      
      const response = await fetch(`${API_BASE_URL}/api/v1/csv_datasource/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      console.log('Response received:', response.status, response.statusText);

      if (!response.ok) {
        const error = await response.json();
        console.error('Upload failed:', error);
        throw new Error(error.detail || 'Upload failed');
      }

      const result = await response.json();
      console.log('Upload success:', result);

      results.push(result.data);
      
    } catch (error) {
      console.error(`Error uploading file: ${file.name}`, error);
      throw error;  
    }
  }
  
  return results;
}


export async function deleteUserCSVFile(fileId: number) {
  const token = localStorage.getItem('@auth_token');
  const response = await fetch(`${API_BASE_URL}/api/v1/csv_datasource/files/${fileId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Failed to delete file');
  }

  return response.json();
}