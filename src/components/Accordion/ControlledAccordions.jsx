import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import PlusButton from './../../components/plusButton/PlusButton';
import style from './controlledAccordions.module.css';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion className={style.wrapper} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          expandIcon={<PlusButton />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{height:"107px"}}
        >
          <Typography className={style.front} sx={{ width: '70%', flexShrink: 0}}>
           Do I need a personal injury report? 
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.description}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.wrapper} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<PlusButton />}
          sx={{height:"107px"}}
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={style.front} sx={{ width: '70%', flexShrink: 0 }}>How much is my case worth?</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.description}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.wrapper} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<PlusButton />}
          sx={{height:"107px"}}
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={style.front} sx={{ width: '70%', flexShrink: 0 }}>
           What should I do right after car accident?
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.description}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.wrapper} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<PlusButton />}
          sx={{height:"107px"}}
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={style.front} sx={{ width: '70%', flexShrink: 0 }}>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.description}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
