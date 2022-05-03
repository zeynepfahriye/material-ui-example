import React, { useState } from "react";
import { Fab, Modal, Tooltip, Typography, Box,styled,Avatar, TextField,Stack, ButtonGroup, Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateRange } from "@mui/icons-material";

const StyledModal=styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
})

const UserBox = styled(Box)({
display:'flex',
alignItems:'center',
gap:'10px',
marginBottom:'20px' 
})

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% -25)", md: 30 },
        }}
      >
        <Fab color="primary" aria-aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
          <Typography variant="h6"  color='gray' textAlign='center'>
          Create test
          </Typography>
        <UserBox>
        <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography fontWeight={500} variant='span'>Travis</Typography>
        </UserBox>
        <TextField
        sx={{width:'100%'}}
        id='standart-multiline-static'
        multiline
        rows={3}
        placeholder='What on your mind?'
        variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary"/>
            <VideoCameraBackIcon color="warning"/>
            <PersonAddIcon color="error"/>
        </Stack>
        <ButtonGroup variant="contained" aria-label='outlined primary button group' fullWidth>
            <Button
            sx={{width:'100px'}}
            >Post</Button>
            <Button><DateRange /></Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
