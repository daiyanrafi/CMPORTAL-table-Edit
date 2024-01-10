// /* eslint-disable no-unused-vars */

// import { TextField, Typography, Grid } from '@mui/material';
// import React from 'react';

// type AddressFormProps = {
//   address_street: string;
//   address_city: string;
//   address_state: string;
//   address_zip: string;
//   updateFields: (fields: Partial<{ address_street: string; address_city: string; address_state: string; address_zip: string }>) => void;
// };

// export function AddressForm({
//   address_street,
//   address_city,
//   address_state,
//   address_zip,
//   updateFields,
// }: AddressFormProps) {
//   return (
//     <div style={{ marginBottom: '10px' }}>
//       <Typography variant="h6" gutterBottom>
//         Address
//       </Typography>
//       <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '20px' }}>Please Enter Address below</p>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             autoFocus
//             label="Street"
//             required
//             type="text"
//             value={address_street}
//             onChange={(e) => updateFields({ address_street: e.target.value })}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="City"
//             required
//             type="text"
//             value={address_city}
//             onChange={(e) => updateFields({ address_city: e.target.value })}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="State"
//             required
//             type="text"
//             value={address_state}
//             onChange={(e) => updateFields({ address_state: e.target.value })}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Zip"
//             required
//             type="text"
//             value={address_zip}
//             onChange={(e) => updateFields({ address_zip: e.target.value })}
//           />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
