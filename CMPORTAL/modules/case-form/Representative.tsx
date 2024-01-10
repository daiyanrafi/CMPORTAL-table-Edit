/* eslint-disable no-unused-vars */

import React from 'react';
import { TextField, Typography, Grid, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material';

type RepresentativeFormProps = {
  representativeTitle: string;
  representativeFirstName: string;
  representativeLastName: string;
  representativePostalAddress: string;
  representativeSuburb: string;
  representativePostcode: string;
  representativeState: string;
  representativeCountry: string;
  representativePreferredContact: string;
  representativeLandline: string;
  representativeMobile: string;
  representativeEmail: string;
  updateFields: (fields: Partial<{
    representativeTitle: string;
    representativeFirstName: string;
    representativeLastName: string;
    representativePostalAddress: string;
    representativeSuburb: string;
    representativePostcode: string;
    representativeState: string;
    representativeCountry: string;
    representativePreferredContact: string;
    representativeLandline: string;
    representativeMobile: string;
    representativeEmail: string;
  }>) => void;
};

export function RepresentativeForm({
  representativeTitle,
  representativeFirstName,
  representativeLastName,
  representativePostalAddress,
  representativeSuburb,
  representativePostcode,
  representativeState,
  representativeCountry,
  representativePreferredContact,
  representativeLandline,
  representativeMobile,
  representativeEmail,
  updateFields,
}: RepresentativeFormProps) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom style={{ fontSize: '25px' }}>
        Representative Details
      </Typography>
      <Typography style={{ marginTop: '10px', fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '18px' }}>If you are submitting this complaint on behalf of another person/supplier/organisation, please complete the Authority to Act form and have it ready to attach</Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            fullWidth
            select
            label={<span style={{ fontSize: 'large' }}>Title</span>}
            value={representativeTitle}
            onChange={(e) => updateFields({ representativeTitle: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          >
           <MenuItem value="Mr" style={{ fontSize: '15px' }}>Mr</MenuItem>
            <MenuItem value="Mrs" style={{ fontSize: '15px' }}>Mrs</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>First Name</span>}
            type="text"
            value={representativeFirstName}
            onChange={(e) => updateFields({ representativeFirstName: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>Last Name</span>}
            type="text"
            value={representativeLastName}
            onChange={(e) => updateFields({ representativeLastName: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>Postal Address</span>}
            type="text"
            value={representativePostalAddress}
            onChange={(e) => updateFields({ representativePostalAddress: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>Suburb</span>}
            type="text"
            value={representativeSuburb}
            onChange={(e) => updateFields({ representativeSuburb: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>Postcode</span>}
            type="text"
            value={representativePostcode}
            onChange={(e) => updateFields({ representativePostcode: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>State</span>}
            type="text"
            value={representativeState}
            onChange={(e) => updateFields({ representativeState: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>Country</span>}
            type="text"
            value={representativeCountry}
            onChange={(e) => updateFields({ representativeCountry: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            row
            aria-label="preferredContact"
            name="preferredContact"
            value={representativePreferredContact}
            onChange={(e) => updateFields({ representativePreferredContact: e.target.value })}
          >
            <FormControlLabel value="Landline" control={<Radio />} label={<span style={{ fontSize: '15px' }}>Landline</span>} />
            <FormControlLabel value="Mobile" control={<Radio />} label={<span style={{ fontSize: '15px' }}>Mobile</span>} />
          </RadioGroup>
        </Grid>
        {representativePreferredContact === 'Landline' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={<span style={{ fontSize: 'large' }}>Landline</span>}
              type="text"
              value={representativeLandline}
              onChange={(e) => updateFields({ representativeLandline: e.target.value })}
              InputProps={{
                style: { fontSize: 'large' },
              }}
            />
          </Grid>
        )}
        {representativePreferredContact === 'Mobile' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={<span style={{ fontSize: 'large' }}>Mobile Phone</span>}
              type="text"
              value={representativeMobile}
              onChange={(e) => updateFields({ representativeMobile: e.target.value })}
              InputProps={{
                style: { fontSize: 'large' },
              }}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={<span style={{ fontSize: 'large' }}>Email</span>}
            type="email"
            value={representativeEmail}
            onChange={(e) => updateFields({ representativeEmail: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ marginTop: '10px', fontFamily: 'Arial, sans-serif', fontSize: '12px', fontStyle: 'italic', marginBottom: '16px' }}>
            If you are acting on behalf of another person, you are required to provide a singed Authority to Act form. Alternatively, you can also post the Authority to Act form to us on GPO Box 2947, Adelaide SA 5001.

            {/* <p style={{ marginBottom: '12px' }}><a href="www.google.com">Download Authority Form</a></p> */}
            <p style={{ marginBottom: '12px', textDecoration: 'underline' }}>
              <a href="www.google.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                Download Authority Form
              </a>
            </p>

            <p style={{ color: 'red', fontSize: '10px' }}>You can skip this page, if you want. Press the 'NEXT' button.</p>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
