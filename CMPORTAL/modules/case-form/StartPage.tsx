// StartPage.tsx
import React from 'react';
import {
  Typography,
  Paper,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Box,
} from '@mui/material';
import { FormData } from './types';

type StartPageProps = {
  onNext: () => void;
  userDataList: FormData[];
  onEdit: (index: number) => void; // Include the onEdit prop
};

const StartPage: React.FC<StartPageProps> = ({ onNext, userDataList, onEdit }) => {
  console.log('onEdit prop:', onEdit);
  
  const handleNext = () => {
    onNext();
  };

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem', width: '80%' }}>
        <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">User Data Table</Typography>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Add New Cases
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Title</TableCell>
              <TableCell>User First Name</TableCell>
              <TableCell>User Last Name</TableCell>
              <TableCell>User Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataList.map((userData, index) => (
              <TableRow key={index}>
                <TableCell>{userData.user_title}</TableCell>
                <TableCell>{userData.user_firstName}</TableCell>
                <TableCell>{userData.user_lastName}</TableCell>
                <TableCell>{userData.user_country}</TableCell>
                <TableCell>
              <Button variant="outlined" color="primary" onClick={() => onEdit(index)}>
                Edit
              </Button>
            </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default StartPage;
