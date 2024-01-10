/* eslint-disable no-unused-vars */

import React from 'react';
import { TextField, Typography, Grid } from '@mui/material';

type IncidentAddressFormProps = {
  incident_address: string;
  incident_address1: string;
  incident_city: string;
  incident_postcode: string;
  incident_state: string;
  updateFields: (fields: Partial<{
    incident_address: string;
    incident_address1: string;
    incident_city: string;
    incident_postcode: string;
    incident_state: string;
  }>) => void;
};

export function IncidentAddressForm({
  incident_address,
  incident_address1,
  incident_city,
  incident_postcode,
  incident_state,
  updateFields,
}: IncidentAddressFormProps) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom style={{fontSize: '25px' }}>
        Incident Address
      </Typography>

      <Typography style={{marginTop: '10px', fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '18px' }}>The incident address is the address where your supply is located and may be different to your postal address</Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus
            label={<span style={{ fontSize: 'large' }}>Address</span>}
            required
            value={incident_address}
            onChange={(e) => updateFields({ incident_address: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>Address 1</span>}
            value={incident_address1}
            onChange={(e) => updateFields({ incident_address1: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>City</span>}
            required
            value={incident_city}
            onChange={(e) => updateFields({ incident_city: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>Postcode</span>}
            required
            value={incident_postcode}
            onChange={(e) => updateFields({ incident_postcode: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>State</span>}
            required
            value={incident_state}
            onChange={(e) => updateFields({ incident_state: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
