import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Modal,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import BuildSetUp from './BuildSetUp.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflow: 'scroll'
};

const TeacherFlowsList = () => {
  const [teachers, setTeachers] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [flows, setFlows] = useState([]);
  const [savedFlow, setSavedFlow] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);

  const renderBuiltFlow = (flow) => {
    axios.get(`/flow/getSavedFlow/${flow.id}`)
      .then(({ data }) => {
        setName(flow.name);
        setSavedFlow(data);
        setOpen(true);
      })
      .catch(err => {
        console.warn(err);
      })
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
    setFlows([]);
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    getTeacherFlows(teachers[panel]);
  }

  const getTeachers = () => {
    axios.get('/teachers/')
      .then(({ data }) => {
        setTeachers(data);
      })
      .catch(err => {
        console.warn(err);
      })
  };

  const getTeacherFlows = (teacher) => {
    axios.get(`/teachers/${teacher.id}`)
      .then(({ data }) => {
        setFlows(data);
      })
      .catch(err => {
        console.warn(err);
      })
  }

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <Box sx={{width: '50%', marginLeft: '20px'}}>
      {
        teachers.map((teacher, i) => (
          <Accordion expanded={expanded === i} onChange={handleChange(i)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i}bh-content`}
              id={`panel${i}bh-header`}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {teacher.full_name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {
                  savedFlow.length ?
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                  >
                  <Box sx={{ ...style, width: '90%', height: '90%' }}>
                    <Typography><h2 id="parent-modal-title">{name ? name : null}</h2></Typography>
                    <BuildSetUp jobBodyParts={[]} video={false} savedFlow={savedFlow} />
                  </Box>
                  </Modal>
                  : <>{flows.map((flow, i) => <Button onClick={() => renderBuiltFlow(flow)}><div key={i}>{flow.name}</div></Button>)}</>
                }
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Box>
  )
}

export default TeacherFlowsList;