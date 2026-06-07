import { useState } from 'react'
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import './App.css';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/generate`, {
       emailContent,
       tone 
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate eamil reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{py:4}} className='app-container'>
      <Typography variant='h3' component="h1" className='header-title' gutterBottom>
        Email Reply Generator
      </Typography>

      <Box className="input-section" sx={{ mx: 3 }}>
        <TextField 
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          label="Original Email Content"
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb:2 }}/>

          <FormControl fullWidth sx={{ mb:3 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ''}
              label={"Tone (Optional)"}
              onChange={(e) => setTone(e.target.value)}>
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
            </Select>
          </FormControl>

          <Button
          className='generate-btn'
            variant='contained'
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth>
            {loading ? <CircularProgress size={24}/> : "Generate Reply"}
          </Button>
      </Box>

      {error && (
        <Typography color='error' sx={{ mb:2 }}>
          {error}
        </Typography>
      )}

      {generatedReply && (
       <Box sx={{ mt: 3}} className="result-section">
          <Typography variant='h6' gutterBottom>
            Generated Reply:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            value={generatedReply || ''}
            inputProps={{ readOnly: true }}/>
        
        <Button
          variant='outlined'
          className='copy-btn'
          sx={{ mt: 2 }}
          onClick={() => navigator.clipboard.writeText(generatedReply)}>
            Copy to Clipboard
        </Button>
       </Box> 
      )}
    </Container>
  )
}

export default App;