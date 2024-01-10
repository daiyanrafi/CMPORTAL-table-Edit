/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Grid, TextField, Select, MenuItem, Input, FormControlLabel, Checkbox, Button } from '@mui/material';
// import ReCAPTCHA from 'react-google-recaptcha';


type FinalizeSubmissionFormProps = {
  final_sub_bestTime: string;
  final_sub_howDidYouHear: string;
  final_sub_attachFile: File | null;
  final_sub_isRobot: boolean;
  updateFields: (fields: Partial<{
    final_sub_bestTime: string;
    final_sub_howDidYouHear: string;
    final_sub_attachFile: File | null;
    final_sub_isRobot: boolean;
  }>) => void;
};

export function FinalizeSubmissionForm({
  final_sub_bestTime,
  final_sub_howDidYouHear,
  final_sub_attachFile,
  final_sub_isRobot,
  updateFields,
}: FinalizeSubmissionFormProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    updateFields({ final_sub_attachFile: file || null });
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom style={{fontSize: '25px' }}>
        Finalize your submission
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '10px', marginTop: '10px' }}>
            What would be the best time and day to call you, between 8:30am and 5pm Monday to friday?
          </Typography>
          <TextField
            fullWidth
            required
            label={<span style={{ fontSize: 'large' }}>Best Time</span>}
            select
            value={final_sub_bestTime}
            onChange={(e) => updateFields({ final_sub_bestTime: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          >
            <MenuItem value="morning" style={{ fontSize: '15px' }}>Morning</MenuItem>
            <MenuItem value="evening" style={{ fontSize: '15px' }}>Evening</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: 'Blue', fontFamily: 'Arial, sans-serif', fontSize: '14px', marginBottom: '10px', marginTop: '10px' }}>
            How did you hear about the Energy and Water Ombudsman's Office?
          </Typography>
          <TextField
            fullWidth
            required
            label={<span style={{ fontSize: 'large' }}>How did you hear about us?</span>}
            select
            value={final_sub_howDidYouHear}
            onChange={(e) => updateFields({ final_sub_howDidYouHear: e.target.value })}
            InputProps={{
              style: { fontSize: 'large' },
            }}
          >
            <MenuItem value="tv" style={{ fontSize: '15px' }}>TV</MenuItem>
            <MenuItem value="radio" style={{ fontSize: '15px' }}>Radio</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            type="file"
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginTop: '10px', marginBottom: '1px' }}>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontStyle: 'italic' }}>By submitting this form, I authorise the Energy & Water Ombudsman SA to consider the complaint against the energy or water supplier specified in this form.</p>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontStyle: 'italic' }}>I also authorise the Energy & Water Ombudsman SA to:</p>

            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontStyle: 'italic' }}>- exchange my information, including relevant sensitive information, to other parties, consultants or external organisations where reasonably necessary for the purpose of dealing with the complaint, and as required or permitted by law;</p>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontStyle: 'italic' }}>- refer the complaint to another body or dispute resolution service where the Energy & Water Ombudsman SA decides it is appropriate.</p>

            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontStyle: 'italic' }}>For general information on the Energy & Water Ombudsman SA deals with information provided to us and the complainant's privacy rights, see our <a href="www.google.com">privacy policy</a>.</p>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontStyle: 'italic' }}>Details of our complaint handling process can be found <a href="www.google.com">here</a>.</p>

          </Typography>
        </Grid>
        {/* <Grid item xs={12} style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
          <FormControlLabel
            control={
              <Checkbox
                required
                checked={final_sub_isRobot}
                onChange={() => updateFields({ final_sub_isRobot: !final_sub_isRobot })}
              />
            }
            label="I am not a robot"
          />
                <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(value: any) => setIsRecaptchaVerified(true)}
              />
        </Grid> */}
      </Grid>
    </div>
  );
}