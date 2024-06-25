
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"


export const JournalPage = () => {
  return (
    <JournalLayout >

      {/* <Typography > Laborum adipisicing adipisicing tempor in qui deserunt aliquip adipisicing reprehenderit magna. Consequat deserunt dolor nulla dolor non tempor ex fugiat velit. Ipsum eiusmod id mollit cillum sint ullamco elit dolore ea consectetur fugiat tempor.</Typography> */}
      
    <NothingSelectedView />

    {/* <NoteView /> */}


    <IconButton
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.8},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >

      <AddOutlined sx={{ fontSize: 30 }} />

    </IconButton>

    </JournalLayout>
  )
}
