import React from 'react'
import {Grid,Input,TextField,RadioGroup,FormControlLabel,Radio,FormLabel } from '@material-ui/core'

const DynamicForm = () => {

  const data = {
    "fields": [
      {
        "label": "Date of Birth (YYYY-MM-DD)",
        "key": "birthday",
        "isRequired": true,
        "order": 1,
        "isReadonly": false,
        "type": "date"
      },
      {
        "label": "Gestational Age",
        "key": "gestationalAge",
        "isRequired": true,
        "order": 3,
        "unit": "weeks",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Sex",
        "items": [
          {
            "value": "male",
            "text": "Male"
          },
          {
            "value": "female",
            "text": "Female"
          }
        ],
        "key": "sex",
        "isRequired": true,
        "order": 4,
        "isReadonly": false,
        "type": "dropdown"
      },
      {
        "label": "Height",
        "key": "height",
        "isRequired": true,
        "order": 5,
        "unit": "cm",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Weight",
        "key": "weight",
        "isRequired": true,
        "order": 6,
        "unit": "kg",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "BMI",
        "key": "bmi",
        "order": 11,
        "unit": "kg/m²",
        "isReadonly": true,
        "type": "number"
      }
    ]
  }
    
    return (
        
        <form>
          {
            data.fields.map((item) => {
              return (
                <div>
                  
  <Grid container spacing={2} justify="center">
                
                  <Grid item xs={12} sm={6}>
                  <TextField id={item.key} label={item.label}  type={item.type} variant="filled"
                   fullWidth required={item.isRequired} isReadonly={item.isReadonly}  />
                   </Grid>
                   

                   
                   </Grid>

                   
                </div>
              )
            })
          }
        
  

  
</form>
    )
}

export default DynamicForm
